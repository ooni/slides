# System imports
import os
import json
import gzip
import ipaddress
import datetime as dt

# Basics
import ujson
# URL related
import requests
try:
    from urllib.parse import urlparse
    from urllib.request import urlopen
except ImportError:
    from urllib import urlopen
    from urlparse import urlparse

# Date parsing
from dateutil.parser import parse as parse_date

# For dealing with ASN data (optional)
import pyasn
import radix

# Numpy and pandas
import pandas as pd
import numpy as np

# Dask
import dask.bag as db
import dask.dataframe as dd
from dask.delayed import delayed
import dask.multiprocessing
from dask.diagnostics import ProgressBar

# censys (optional)
import censys.ipv4 as censsysipv4

MEASUREMENT_DIR = 'data/'

import re
BLOCKPAGES = [
    {
        'match': [
            (
                'body_s_re',
                 re.compile(b'prohibited for viewership from within Pakistan.')
            )
        ],
        'block_id': 'id-surf-safe-0',
        'measurement_id': [
            'https://explorer.ooni.torproject.org/measurement/20160822T062512Z_AS23674_hWMuxtANu8ujfyxCXoww1arsj3gFrfJbXvxd1rkZjuF6f1LD05?input=http:%2F%2Fen.wikipedia.org%2Fwiki%2FLars_Vilks_Muhammad_drawings_controversy'
        ]
    }
]
CENSOR_IPS = [
    #lambda ip: ip.startswith('10.10')
]

from base64 import b64decode
def check_for_match(resp, rule):
    rule_type, r = rule
    if rule_type == 'body_s_re':
        resp_body = resp.get('body', None)
        if isinstance(resp_body, dict):
            resp_body = b64decode(resp_body['data'])
        elif resp_body is not None:
            # XXX is this sane?
            resp_body = resp_body.encode('utf-8')
        else:
            return False
        return r.search(resp_body) != None

def get_blockpage(test_keys):
    dns_addrs = []
    for query in test_keys.get('queries', []):
        for answer in query['answers']:
            if answer['answer_type'] == 'A':
                try:
                    for idx, f in enumerate(CENSOR_IPS):
                        if f(answer['ipv4']):
                            return 'dns-blk-%s' % idx
                except ValueError:
                    pass

    for i in range(len(test_keys['requests'])):
        if not isinstance(test_keys['requests'][i].get('response', None), dict):
            continue
        resp = test_keys['requests'][i]['response']
        for fp in BLOCKPAGES:
            for rule in fp['match']:
                if check_for_match(resp, rule):
                    return fp['block_id']
    return

import re
from base64 import b64decode
TITLE_REGEXP = re.compile("<title>(.*?)</title>", re.IGNORECASE | re.DOTALL)
def extract_title(body):
    m = TITLE_REGEXP.search(body, re.IGNORECASE | re.DOTALL)
    if m:
        return m.group(1)
    return ''

def extract_wc_ctrl(test_keys):
    ctrl = test_keys.get('control', {})
    if ctrl is None:
        ctrl = {}
    return {
        'ctrl_failure': test_keys.get('control_failure', None),
        'ctrl_http_body_len': ctrl.get('http_request', {}).get('body_length', None),
        'ctrl_http_failure': ctrl.get('http_request', {}).get('failure', None),
        'ctrl_http_headers': ctrl.get('http_request', {}).get('headers', None),
        'ctrl_http_title': ctrl.get('http_request', {}).get('title', None),
        'ctrl_http_status_code': ctrl.get('http_request', {}).get('status_code', None),
        'ctrl_tcp_info': ctrl.get('tcp_connect', None),
        'ctrl_dns_failure': ctrl.get('dns', {}).get('failure', None),
        'ctrl_dns_addrs': ctrl.get('dns', {}).get('addrs', None)
    }

def extract_wc_exp_http(test_keys):
    body_len = None
    title = None

    if len(test_keys['requests']) == 0:
        return {
            'exp_http_failure': test_keys.get('http_experiment_failure', 'empty_req_no_fail'),
            'exp_http_body_len': None,
            'exp_http_headers': None,
            'exp_http_title': None,
            'exp_http_status_code': None
        }

    last_session = test_keys['requests'][0]
    last_resp = last_session.get('response', {})
    if last_resp is None:
        last_resp = {}
    resp_body = last_resp.get('body', None)

    if isinstance(resp_body, dict):
        resp_body = b64decode(resp_body['data'])
        body_len = len(resp_body)

    elif resp_body is not None:
        title = extract_title(resp_body)
        body_len = len(resp_body)
        
    return {
        'exp_http_failure': test_keys.get('http_experiment_failure', 'unknown_failure_exp'),
        'exp_http_body_len': body_len,
        'exp_http_headers': last_resp.get('headers', None),
        'exp_http_title': title,
        'exp_http_status_code': last_resp.get('code', None)
    }

def extract_wc_exp_dns(test_keys):
    dns_addrs = []
    for query in test_keys.get('queries', []):
        for answer in query['answers']:
            if answer['answer_type'] == 'A':
                dns_addrs.append(answer['ipv4'])
    return {
        'exp_dns_failure': test_keys.get('dns_experiment_failure', None),
        'exp_dns_addrs': dns_addrs
    }

def extract_wc_exp_tcp(test_keys):
    tcp_info = {}
    for tcp_connect in test_keys['tcp_connect']:
        key = "%s:%d" % (tcp_connect['ip'], tcp_connect['port'])
        if key in tcp_info:
            raise RuntimeError("Duplicate tcp key %s" % (key))
        
        tcp_info[key] = {
            'failure': tcp_connect['status']['failure'],
            'status': tcp_connect['status']['success']
        }
    
    return {
        'exp_tcp_info': tcp_info
    }

def extract_wc_probe_calculations(test_keys):
    calcs = {}
    
    probe_calculations = [
        'dns_consistency',
        'blocking',
        'accessible',
        'headers_match',
        'body_proportion',
        'title_match',
        'headers_match',
        'status_code_match',
    ]
    # XXX also calculate these in pipeline
    for calc_key in probe_calculations:
        calcs["calc_%s" % calc_key]  = test_keys.get(calc_key, None)
        
    calcs['calc_blockpage'] = get_blockpage(test_keys)
    return calcs

def compute_wc_anomaly(final):
    color = 'green'

    # We map to green all things related to server side blocking
    if final['exp_http_title'] is not None:
        if final['exp_http_title'].startswith('Attention Required! | CloudFlare'):
            return color
        
        if final['exp_http_title'].startswith('Sucuri WebSite Firewall -'):
            return color
        if final['exp_http_title'].startswith('Sucuri CloudProxy Website Firewall'):
            return color

    if final['calc_blocking'] == None:
        color = 'yellow'
    elif final['calc_blocking'] != False:
        color = 'orange'

    if final['calc_blockpage'] != None:
        color = 'red'
    return color

def extract_web_connectivity(m):
    #'client_resolver'? 
    final = {
        'input': m['input']
    }
    final.update(extract_wc_ctrl(m['test_keys']))
    final.update(extract_wc_exp_http(m['test_keys']))
    final.update(extract_wc_exp_dns(m['test_keys']))
    final.update(extract_wc_probe_calculations(m['test_keys']))
    final['anmly_color'] = compute_wc_anomaly(final)
    return final

def extract_fm_probe_calculations(test_keys):
    calcs = {}
    calc_keys = [
        'facebook_b_api_dns_consistent',
        'facebook_b_api_reachable',
        'facebook_b_graph_dns_consistent',
        'facebook_b_graph_reachable',
        'facebook_dns_blocking',
        'facebook_edge_dns_consistent',
        'facebook_edge_reachable',
        'facebook_external_cdn_dns_consistent',
        'facebook_external_cdn_reachable',
        'facebook_scontent_cdn_dns_consistent',
        'facebook_scontent_cdn_reachable',
        'facebook_star_dns_consistent',
        'facebook_star_reachable',
        'facebook_stun_dns_consistent',
        'facebook_stun_reachable',
        'facebook_tcp_blocking'
    ]
    for key in calc_keys:
        try:
            calcs["calc_%s" % key] = test_keys[key]
        except KeyError:
            calcs["calc_%s" % key] = None
    return calcs

# anomaly_color can be one of:
# * green
# * yellow
# * orange
# * red
def compute_fm_anomaly(final):
    true_calc_keys = [
        'facebook_b_api_dns_consistent',
        'facebook_b_api_reachable',
        'facebook_b_graph_dns_consistent',
        'facebook_b_graph_reachable',
        'facebook_edge_dns_consistent',
        'facebook_edge_reachable',
        'facebook_external_cdn_dns_consistent',
        'facebook_external_cdn_reachable',
        'facebook_scontent_cdn_dns_consistent',
        'facebook_scontent_cdn_reachable',
        'facebook_star_dns_consistent',
        'facebook_star_reachable',
        'facebook_stun_dns_consistent',
        # facebook_stun_reachable',
    ]
    false_calc_keys = [
        'facebook_tcp_blocking',
        'facebook_dns_blocking'
    ]
    color = 'green'
    for key in false_calc_keys:
        if final['calc_%s' % key] == True:
            color = 'red'
        elif final['calc_%s' % key] == None and color != 'red':
            color = 'yellow'
    for key in true_calc_keys:
        if final['calc_%s' % key] == False:
            color = 'red'
        elif final['calc_%s' % key] == None and color != 'red':
            color = 'yellow'
    return color
            
def extract_facebook_messenger(m):
    final = {}
    # XXX compute these pipeline side too
    final.update(extract_fm_probe_calculations(m['test_keys']))
    final['anmly_color'] = compute_fm_anomaly(final)
    return final

def extract_wa_probe_calculations(test_keys):
    # registration_server_failure: null,
    # registration_server_status: 'ok',
    # whatsapp_web_failure: null
    # whatsapp_endpoints_status: 'ok'
    # whatsapp_web_status: 'ok'
    # whatsapp_endpoints_dns_inconsistent: []
    # whatsapp_endpoints_blocked: []   
    calc = {}
    calc_keys = [
        'registration_server_status',
        'whatsapp_endpoints_status',
        'whatsapp_web_status',
        'whatsapp_endpoints_dns_inconsistent',
        'whatsapp_endpoints_blocked'
    ]
    for key in calc_keys:
        calc['calc_%s' % key] = test_keys[key]
    return calc

def extract_wa_failures(test_keys):
    # XXX maybe we want to do this from the raw data directly?
    fail = {}
    failure_keys = [
        'registration_server_failure',
        'whatsapp_web_failure'
    ]
    for key in failure_keys:
        try:
            fail[key] = test_keys[key]
        except KeyError:
            fail[key] = None
    return fail

def compute_wa_anomaly(final):
    color = 'green'
    for key in ['registration_server_status', 'whatsapp_endpoints_status', 'whatsapp_web_status']:
        if final["calc_%s" % key] != 'ok':
            color = 'red'
    return color

def extract_whatsapp(m):
    final = {}
    # XXX compute these pipeline side too
    final.update(extract_wa_probe_calculations(m['test_keys']))
    final.update(extract_wa_failures(m['test_keys']))
    final['anmly_color'] = compute_wa_anomaly(final)
    return final

def extract_telegram_probe_calculations(test_keys):
    # telegram_web_failure: null,
    # telegram_http_blocking: false
    # telegram_web_status: 'ok'
    # telegram_tcp_blocking: false

    calc = {}
    calc_keys = [
        'telegram_web_failure',
        'telegram_http_blocking',
        'telegram_web_status',
        'telegram_tcp_blocking'
    ]
    for key in calc_keys:
        calc['calc_%s' % key] = test_keys[key]
    return calc

def extract_telegram_failures(test_keys):
    # XXX maybe we want to do this from the raw data directly?
    fail = {}
    failure_keys = [
        'telegram_web_failure'
    ]
    for key in failure_keys:
        try:
            fail[key] = test_keys[key]
        except KeyError:
            fail[key] = None
    return fail

def compute_telegram_anomaly(final):
    color = 'green'
    for key in ['telegram_tcp_blocking', 'telegram_http_blocking']:
        if final["calc_%s" % key] == True:
            color = 'red'
    for key in ['telegram_web_status']:
        if final["calc_%s" % key] != 'ok':
            color = 'red'
    return color

def extract_telegram(m):
    final = {}
    # XXX compute these pipeline side too
    final.update(extract_telegram_probe_calculations(m['test_keys']))
    final.update(extract_telegram_failures(m['test_keys']))
    final['anmly_color'] = compute_telegram_anomaly(final)
    return final

def extract_vanilla_tor(m):
    final = {}
    final['calc_success'] = m['test_keys'].get('success', None)
    final['anmly_color'] = 'green'
    if final['calc_success'] == False:
        final['anmly_color'] = 'red'
    elif final['calc_success'] == None:
        final['anmly_color'] = 'yellow'
    return final

def extract_hhfm_exp(test_keys):
    exp = {}
    exp['exp_req_headers'] = test_keys['requests'][0].get('request', {}).get('headers', {})
    exp['exp_req_headers']['Connection'] = 'close'
    exp['exp_req_failure'] = test_keys['requests'][0].get('failure', None)
    if exp['exp_req_failure'] is None:
        resp_body = test_keys['requests'][0]['response'].get('body', None)
    else:
        resp_body = None
    exp['exp_resp_body'] = resp_body
    return exp

def compute_hhfm_result(final):
    calc = {}
    calc['calc_headers_modified'] = None
    calc['calc_total_tampering'] = None
    try:
        # {"headers_dict": {"acCePT-languagE": ["en-US,en;q=0.8"], ...}, 
        #  "request_line": "geT / HTTP/1.1",
        #  "request_headers": [ ["Connection", "close"], ... ]
        # }
        ctrl_headers = ujson.loads(final['exp_resp_body'])
    except:
        calc['calc_total_tampering'] = True
        return calc
    calc['calc_headers_modified'] = False
    calc['calc_total_tampering'] = False
    if len(final['exp_req_headers']) != len(ctrl_headers['headers_dict']):
        calc['calc_headers_modified'] = True
        return calc
    for k, v in final['exp_req_headers'].items():
        try:
            if v != ctrl_headers['headers_dict'][k][0]:
                calc['calc_headers_modified'] = True
                return calc
        except KeyError:
            calc['calc_headers_modified'] = True
            return calc
    return calc

def compute_hhfm_anomaly(final):
    color = 'green'
    for key in ['calc_headers_modified', 'calc_total_tampering']:
        if final[key] == True:
            color = 'red'
        elif final[key] == None and color != 'red':
            color = 'yellow'
    return color

def extract_http_header_field_manipulation(m):
    final = {}
    final.update(extract_hhfm_exp(m['test_keys']))
    final.update(compute_hhfm_result(final))
    final['anmly_color'] = compute_hhfm_anomaly(final)
    return final
    
def compute_hirl_anomaly(final):
    color = 'green'
    for key in ['calc_tampering']:
        if final[key] == True:
            color = 'red'
        elif final[key] == None and color != 'red':
            color = 'yellow'
    return color

def extract_http_invalid_request_line(m):
    final = {
        'calc_tampering': None,
        'exp_received': m['test_keys']['received'],
        'exp_sent': m['test_keys']['sent']        
    }
    if len(m['test_keys']['received']) != len(m['test_keys']['sent']):
        final['calc_tampering'] = True
    else:
        final['calc_tampering'] = False
        for i, v in enumerate(m['test_keys']['received']):
            if v != m['test_keys']['sent'][i]:
                final['calc_tampering'] = True
                break
    final['anmly_color'] = compute_hirl_anomaly(final)
    return final


def extract_common(m):
    common = {}
    common_fields = [
        'probe_cc',
        'probe_asn',
        'test_start_time',
        'report_id',
        'bucket_date'
    ]
    for field in common_fields:
        common['a_%s' % field] = m[field]
    platform = common.get('annotations', {}).get('platform', 'uknown')
    common['a_software_string'] = '%s/%s/%s' % (platform, m['software_name'], m['software_version'])
    
    return common

extractors = {
    'web_connectivity': extract_web_connectivity,
    'vanilla_tor': extract_vanilla_tor,
    'facebook_messenger': extract_facebook_messenger,
    'whatsapp': extract_whatsapp,
    'http_header_field_manipulation': extract_http_header_field_manipulation,
    'http_invalid_request_line': extract_http_invalid_request_line,
    'telegram': extract_telegram
}


from glob import glob
failed_report_files = []
def msmts_from_report(report_path, extract_test=extract_web_connectivity):
    ds = []
    with open(report_path) as in_file:
        for line in in_file:
            entry = ujson.loads(line)
            d = extract_common(entry)
            d.update(extract_test(entry))
            ds.append(d)
    return ds

def get_all_dfs(probe_cc):
    import progressbar
    bar = progressbar.ProgressBar()
    msmts = {}
    for report_file in bar(glob('{}/{}/*'.format(MEASUREMENT_DIR, probe_cc))):
        tst, probe_cc, probe_asn, test_name, report_id = os.path.basename(report_file).split('-')[:5]
        extract_test = extractors.get(test_name, None)
        if extract_test is None:
            continue
        msmts[test_name] = msmts.get(test_name, [])
        try:
            msmts[test_name] += msmts_from_report(report_file, extract_test=extract_test)
        except Exception as exc:
            failed_report_files.append((exc, report_file))
    all_dfs = {}
    for key in msmts.keys():
        all_dfs[key] = pd.DataFrame(msmts[key])
    return all_dfs

all_dfs = get_all_dfs(probe_cc='ZA')

df_wa = all_dfs['whatsapp']
df_wa[df_wa['anmly_color'] != 'green']


df_hirl = all_dfs['http_invalid_request_line']
df_hirl[df_hirl['anmly_color'] != 'green']

df_fm = all_dfs['facebook_messenger']
df_fm[df_fm['anmly_color'] == 'red']

df_hhfm = all_dfs['http_header_field_manipulation']
df_hhfm[df_hhfm['anmly_color'] != 'green']

df_vt = all_dfs['vanilla_tor']
df_vt[df_vt['anmly_color'] != 'green']

df_wc = all_dfs['web_connectivity']

only_blockpages = df_wc[df_wc['anmly_color'] == 'red'][[
    'calc_blocking',
    'calc_blockpage',
    'anmly_color',
    'a_probe_asn',
    'a_test_start_time',
    'a_report_id',
    'input'
]]

unique_blocked_sites = only_blockpages[['input']].drop_duplicates()
