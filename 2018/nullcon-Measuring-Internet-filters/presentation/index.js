// Import React
import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors } from 'ooni-components'

import 'prismjs/themes/prism.css';

import FaApple from 'react-icons/lib/fa/apple'
import FaAndroid from 'react-icons/lib/fa/android'
import MdLaptop from 'react-icons/lib/md/laptop'
import MdChatBubble from 'react-icons/lib/md/chat-bubble'

// Import Spectacle Core tags
import {
  Image,
  BlockQuote,
  Cite,
  Deck,
  CodePane,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Layout,
  Fit,
  Fill,
  Appear,
  Link,
  Notes
} from "spectacle"

import preload from "spectacle/lib/utils/preloader"

import Terminal from "spectacle-terminal"
import CodeSlide from 'spectacle-code-slide'

// Import theme
import theme from "../themes/ooni/index.js";

import WorldDots from './WorldDots'

const images = {
  SourceLuke: require("../assets/source-luke.jpg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
  ProbeVerticalColor: require("ooni-components/components/svgs/logos/Probe-VerticalColor.svg"),
  PipelineHorizontalMonochrome: require("ooni-components/components/svgs/logos/Pipeline-HorizontalMonochrome.svg"),
  APIHorizontalMonochrome: require("ooni-components/components/svgs/logos/API-HorizontalMonochrome.svg"),
  ExplorerHorizontalMonochrome: require("ooni-components/components/svgs/logos/Explorer-HorizontalMonochrome.svg"),
  FlagOfBrazil: require("../assets/Flag_of_Brazil.svg"),
  FlagOfEgypt: require("../assets/Flag_of_Egypt.svg"),
  FlagOfIran: require("../assets/Flag_of_Iran.svg"),
  FlagOfSpain: require("../assets/Flag_of_Spain.svg"),
  FlagOfRussia: require("../assets/Flag_of_Russia.svg"),
  BlockedDomainsInIran: require("../assets/BlockedDomainsInIran.svg"),
  NotQuiteBlockingInBrazil: require("../assets/measurements.br.pernambuco.png"),
  Digicert: require("../assets/digicert-and-wikipedia.png"),
  MskIX: require("../assets/msk-ix.png"),
  BGP: require("../assets/bgpfig1.png"),
  MiddleBoxes: require("../assets/MiddleBoxes.svg"),
  PerformanceBolt: require("../assets/PerformanceBolt.svg"),
  WebCensorshipCross: require("../assets/WebCensorshipCross.svg"),
  OnionBlue: require("../assets/Onion_Blue_Icon.svg"),
  Nexus5: require("../assets/Nexus5.svg"),
  MobileAppScreenshot1: require("../assets/MobileAppScreenshot1.jpg"),
  MobileAppScreenshot2: require("../assets/MobileAppScreenshot2.jpg"),
  MobileAppScreenshot3: require("../assets/MobileAppScreenshot3.jpg"),
  OONIAPIScreenshot: require("../assets/OONIAPI-Screenshot.png"),
  OONIExplorerScreenshot: require("../assets/OONIExplorer-Screenshot.png"),
  OONIProbeScreenshot: require("../assets/OONIProbe-Screenshot.png"),
  OONIRunScreenshot: require("../assets/OONIRun-Screenshot.png"),
  Wikileaks: require("../assets/wikileaks.jpg"),
  WikileaksTweet: require("../assets/wikileaks-tweet-948320651407962112.png"),
};

preload(images)

const GRID_HEIGHT = 400
const GRID_WIDTH = 300
const ECOSYSTEM_IMG_W = null
const ECOSYSTEM_IMG_H = 200

const Arrow = ({dir}) => {
  let transform
  let width
  let height
  let viewBox = '0 0 140 140'
  if (dir == 'down') {
    transform = 'rotate(90) translate(0 -40)'
    viewBox = '0 0 40 140'
    height = '200'
  } else if (dir == 'up') {
    transform = 'rotate(-90) translate(-140 0)'
    viewBox = '0 0 40 140'
    height = '200'
  } else if (dir == 'left') {
    transform = 'rotate(180) translate(-140 -40)'
    viewBox = '0 0 140 40'
    width = '200'
  } else {
    width = '200'
  }
  return (<svg viewBox={viewBox} width={width} height={height}>
  	<g transform={transform}><path d="M120,6.6L133.4,20L120,33.4l-2.3-2.4l9.3-9.4H6.6v-3.2H127L117.7,9L120,6.6z"/></g>
  </svg>
  )
}
const ooEcosystem = {
  ProbeVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Probe-VerticalMonochrome.svg"),
    top: 0,
    left: 0
  },
  SnycVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Snyc-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: 0
  },

  RunVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Run-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH
  },
  MeasurementKitMonochrome: {
    src: require("../assets/Measurement-Kit-BW.png"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH,
  },

  ExplorerVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Explorer-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH*2,
  },
  APIVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/API-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH*2,
  },

  ProteusVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Proteus-VerticalMonochrome.svg"),
    top: GRID_HEIGHT/2,
    left: GRID_WIDTH*3,
  },

  PipelineVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Pipeline-VerticalMonochrome.svg"),
    top: GRID_HEIGHT,
    left: GRID_WIDTH*3
  },
}

// Require CSS
require("normalize.css");

const DefinitionTerm = styled(Text)`
font-size: 3.5rem !important;
text-align: left;
`

const DefinitionFonetics = styled(Text)`
  font-size: 2.5rem !important;
  color: ${colors.palette.gray4};
  display: inline;
`

const DefinitionItem = styled(ListItem)`
  text-align: left;
  padding-bottom: 20px;
  font-size: 2rem !important;
  text-indent: -30px;
  padding-left: 30px;
  color: ${colors.palette.gray2};
`

const Definition = styled.span`
  color: ${colors.palette.black};
`

const WorldDotsBg = styled.div`
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: '50%';
  transform: translateX(-50%) translateY(-20%);

  z-index: -1;
  opacity: 0.8;
  filter: blur(3px)
`

const CountryReportHeading = styled.div`
  background-color: ${colors.OONI_BLUE};
  color: ${colors.palette.white};
  font-size: 3rem;
  padding: 20px;
  margin-top: 20px;
  margin-bottom: 20px;
`

const CountryReportDate = styled.div`
  background-color: ${colors.OONI_BLUE};
  color: ${colors.palette.white};
  font-size: 2rem;
  padding: 20px;
  width: 30%;
  margin-top: 20px;
  margin-bottom: 20px;
  text-align: left;
`

const CountryReportFinding = styled.div`
  background-color: ${chroma(colors.palette.gray9).alpha(0.7).css()};
  color: ${colors.palette.white};
  padding: 20px;
  margin-top: 20px;
  text-align: left;
`
const WhiteImageContainer = styled.div`
  background-color: ${colors.palette.white};
`

const EcosystemContainer = styled.div`
  position: relative;
  height: 700px;
  width: 1000px;
`

const EcosystemItem = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
  z-index: -100;
`

const ArrowContainer = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`

const StyledFloatingLink = styled.div`
bottom: calc(-120vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`

const StyledPageLinkContainer = styled.div`
  text-align: left;
  padding-left: 100px;
  padding-top: 50px;
`

const StyledPageLink = styled(Link)`
  position: relative;
  padding-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-right: 30px;
  background-color: ${colors.palette.white};
  border: 2px solid ${colors.palette.gray6};
  border-radius: 10px;
  box-shadow: 5px 10px 10px #888888;
`

const FloatingLink = ({url}) => (
  <StyledFloatingLink>
    <StyledPageLinkContainer>
      <StyledPageLink href={url}>{url}</StyledPageLink>
    </StyledPageLinkContainer>
  </StyledFloatingLink>
)

const NettestType = styled(Fill)`
  padding-bottom: 20px;
  h4 {
    font-size: 2rem;
    color: ${colors.palette.black}
  }
  svg {
    fill: ${colors.palette.blue5}
  }
`

const PhoneContainer = styled(Fill)`
  position: relative;
  perspective: 500px;
  opacity: ${props => props.active ? '1' : '0.7'};
  transition: opacity 3s;
`

const Screenshot = styled.div`
  position: absolute;
  top: 70px;
  left: 15px;
  img {
    width: 275px;
    margin: 0;
  }
`

const PhoneAndScreenshot = styled.div`
  ${props => {
    if (props.active) {
      return '';
    }
    return 'transform: translateZ(-200px);';
  }};
  transition: transform 3s;
`

class PhoneCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      activeIdx: 0
    }
    this.change = this.change.bind(this)
  }

  componentDidMount(){
    this.change()
    setInterval(this.change, 15000)
  }

  change() {
    this.setState({
      activeIdx: (this.state.activeIdx + 1) % 3
    })
  }
  render() {
    const {
      activeIdx
    } = this.state
    const {
      screenshots
    } = this.props

    return (
      <Layout>
        {[0,1,2].map(idx => {
          return (
            <PhoneContainer active={idx == activeIdx}>
              <PhoneAndScreenshot active={idx == activeIdx}>
                <Screenshot>
                  <Image src={screenshots[idx]} />
                </Screenshot>
                <Image src={images.Nexus5} width="300px" />
              </PhoneAndScreenshot>
            </PhoneContainer>
          )
        })}
      </Layout>
    )
  }
}

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="white">
          <Image style={{paddingBottom: '30px'}} width="600px" src={images.OONIHorizontalColor} />
          <Heading size={2}>
          Measuring Internet filters
          </Heading>
          <Appear fid="1">
            <Heading size={3}>
            and their unexpected impact
            </Heading>
          </Appear>
          <Heading size={6}>
          Leonid Evdokimov<br/>
          nullcon, Goa, March 2018
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="quaternary">
          <Heading size={2} caps textColor="quarternary">What is</Heading>
          <Heading textColor="quarternary">Internet Censorship?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <DefinitionTerm>Internet Censorship <DefinitionFonetics>|ˈɪntənɛt sɛnsərʃɪp|</DefinitionFonetics></DefinitionTerm>
          <List ordered>
            <DefinitionItem><Definition>a distortion of the reality of the Internet created by those in power.</Definition></DefinitionItem>
            <DefinitionItem><Definition>another term for <span style={{color: colors.OONI_BLUE}}>FILTERNET</span>.</Definition></DefinitionItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} caps textColor="secondary">
            OONI Is
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              Open Methodologies
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="primary">
              Open Source Software
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="primary">
              Open Data
            </Heading>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfIran} bgDarken={0.7} bgSize='120%'>
          <Notes>
          <h4>Notes</h4>
          <ol>
          <li>Thousands of ooniprobe network measurements collected from 60
          local networks across Iran over the last three years have confirmed
          the blocking of 886 domains (and 1,019 URLs in total)</li>
          <li>Facebook Messenger was blocked using DNS manipulation</li>
          <li>One of the most advanced censoring regimes</li>
          <li>Non deterministic censorship</li>
          <li>Instagram became entirely blocked when it switched to HTTPS</li>
          <li>Export laws make website also block acccess FROM Iran</li>
          </ol>
          </Notes>

          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.BlockedDomainsInIran} />
            </WhiteImageContainer>
            <CountryReportDate>September 2017</CountryReportDate>
            <Link href='https://ooni.torproject.org/post/iran-internet-censorship/'>ooni.torproject.org/post/iran-internet-censorship</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfSpain} bgDarken={0.7} bgSize='120%'>
          <Notes>
            Maria
            <h4>Speaker notes</h4>
            <ol>
            <li>Confirm the blocking of at least 25 sites related to the Catalan referendum</li>
            <li>TLD issues happend, `.io`, `.sk`</li>
            </ol>
          </Notes>
            <CountryReportFinding>At least 25 websites related to the Catalonia Independence Referendum were blocked.</CountryReportFinding>
            <CountryReportFinding>The .cat registry was raided and forced to take down many websites.</CountryReportFinding>
            <div>
            <CountryReportHeading>Spain</CountryReportHeading>
            <CountryReportDate>October 2017</CountryReportDate>
            </div>
            <Link href='https://ooni.torproject.org/post/internet-censorship-catalonia-independence-referendum/'>ooni.torproject.org/post/internet-censorship-catalonia-independence-referendum</Link>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfBrazil} bgDarken={0.7} bgSize='120%'>
          <Notes>
          </Notes>

          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.NotQuiteBlockingInBrazil} />
            </WhiteImageContainer>
            <CountryReportDate>November 2017</CountryReportDate>
            <Link href='https://ooni.torproject.org/post/not-quite-network-censorship/'>ooni.torproject.org/post/not-quite-network-censorship</Link>
          </div>
        </Slide>


        <Slide transition={["fade"]} bgImage={images.Wikileaks} bgDarken={0.7} bgSize='100%'>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.WikileaksTweet} />
            </WhiteImageContainer>
            <Link href='https://twitter.com/wikileaks/status/948320651407962112'>twitter.com/statuses/948320651407962112</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Notes>
          Arturo
          </Notes>
          <Heading textColor="quarternary">OONI Software Ecosystem</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Arturo
          </Notes>
          <EcosystemContainer>
          {Object.keys(ooEcosystem).map(key => {
            const item = ooEcosystem[key]
            return (
              <EcosystemItem key={key} top={item.top} left={item.left}>
                <Image src={item.src} width={ECOSYSTEM_IMG_W} height={ECOSYSTEM_IMG_H} />
              </EcosystemItem>
            )
          })}
          </EcosystemContainer>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Arturo
          </Notes>
          <Heading size={2} textColor="primary">OONI Software tests</Heading>
          <Layout style={{paddingTop: '40px'}}>
            <NettestType>
              <Image src={images.WebCensorshipCross} height="150px" />
              <Heading size={4}>Web Censorship</Heading>
            </NettestType>

            <NettestType>
              <MdChatBubble size="150px" />
              <Heading size={4}>Instant Messaging Apps</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.OnionBlue} height="145px" />
              <Heading size={4}>Censorship Circumvention</Heading>
            </NettestType>

          </Layout>
          <Layout style={{paddingTop: '20px'}}>
            <NettestType>
              <Image src={images.MiddleBoxes} height="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Middleboxes</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.PerformanceBolt} height="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Speed & Performance</Heading>
            </NettestType>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Maria
          </Notes>
          <Layout>
          <Fill>
          <Image src={images.ProbeVerticalColor} width={200}/>
          </Fill>
          <Fill>
            <Heading size={4} fit caps textColor="secondary">Measurement App For</Heading>
            <Layout style={{paddingTop: '20px'}}>
              <Fill style={{marginRight: '30px'}}>
                <Layout style={{paddingBottom: '20px'}}>
                  <Fill>
                  <FaApple width='100%' height='100%' />
                  </Fill>
                  <Fill>
                  <FaAndroid width='100%' height='100%'/>
                  </Fill>
                </Layout>
                <Heading size={4} textColor="primary">Android</Heading>
                <Heading size={4} textColor="primary">iOS</Heading>
              </Fill>
              <Fill style={{marginLeft: '30px'}}>
                <Layout style={{paddingBottom: '20px'}}>
                  <Fill>
                    <MdLaptop width='60%' height='100%' />
                  </Fill>
                </Layout>
                <Heading size={4} textColor="primary">macOS</Heading>
                <Heading size={4} textColor="primary">Linux</Heading>
              </Fill>
            </Layout>
          </Fill>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="secondary">
          <Notes>
          Maria
          </Notes>
          <PhoneCarousel screenshots={[
            images.MobileAppScreenshot1,
            images.MobileAppScreenshot2,
            images.MobileAppScreenshot3
          ]}/>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIProbeScreenshot}>
          <Notes>
          Maria
          </Notes>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIRunScreenshot}>
          <FloatingLink url='https://run.ooni.io' />
        </Slide>


        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Arturo
          </Notes>
          <Heading textColor="secondary" style={{paddingBottom: '40px'}}>Open Data</Heading>
          <Layout>
            <Fill style={{'text-align': 'left', marginRight: '40px'}}>
              <Image style={{margin: '0'}} src={images.PipelineHorizontalMonochrome} height="100px" />
              <Image style={{margin: '0'}} src={images.APIHorizontalMonochrome} height="79px" />
              <Image style={{margin: '0'}} src={images.ExplorerHorizontalMonochrome} height="100px" />
            </Fill>
            <Fill>
              <Text>Provides <b>evidence</b> of censorship events</Text>
              <Text>Allows researchers to conduct <b>independent studies</b> & to explore other research questions</Text>
              <Text>Allows the public to <b>verify</b> our findings</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIExplorerScreenshot}>
          <Notes>
          Arturo
          </Notes>
          <FloatingLink url='https://explorer.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIAPIScreenshot}>
          <Notes>
          Arturo
          </Notes>
          <FloatingLink url='https://api.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Arturo
          </Notes>
          <Heading size={1} textColor="secondary">Go RAW!</Heading>
          <Heading size={3} textColor="primary">Mining OONI data</Heading>
          <Link textColor="primary" href='https://ooni.torproject.org/post/mining-ooni-data'>ooni.torproject.org/post/mining-ooni-data</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Image src={images.SourceLuke} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="quaternary">
          <Heading size={2} textColor="quarternary">What's wrong with</Heading>
          <Heading textColor="quarternary">Internet Censorship?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEgypt} bgDarken={0.7} bgSize='120%'>
          <CountryReportFinding>HTTPS throttled,  AlexaTop50 adult websites serving malware.<br/>Users complaining for months.</CountryReportFinding>
          <Appear fid="1" order={1}>
            <CountryReportFinding>Unauthorised access? Corrupt sysadmin?</CountryReportFinding>
          </Appear>
          <div>
            <CountryReportHeading>Egypt</CountryReportHeading>
            <CountryReportDate>Autumn 2016</CountryReportDate>
          </div>
          <Appear fid="2" order={2}>
            <Link href='https://ooni.torproject.org/post/egypt-network-interference/'>ooni.torproject.org/post/egypt-network-interference</Link>
          </Appear>
        </Slide>


        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
          Tried to ban gambling, banned crl3.digicert.com & ocsp.digicert.com for several days.
          </Notes>
          <Appear fid="1" order={1}>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.Digicert} />
            </WhiteImageContainer>
            <CountryReportDate>October 2016</CountryReportDate>
          </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <div>
            <CountryReportFinding>Prosecutor's experts try to ban gambling app endpoints<br/>
            Probably, enumerating them with network sniffer…
            </CountryReportFinding>
          </div>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportFinding>Digicert OCSP responders are gone</CountryReportFinding>
            <CountryReportFinding>Chrome and Firefox lag, Safari can't access wikipedia & facebook at all</CountryReportFinding>
            </div>
          </Appear>
          <CountryReportDate>October 2016</CountryReportDate>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
          story of Russian hacktivists abusing blocklists to CAUSE collateral
          damage: trigger troubles with high-profile websites and killing ~10%
          of traffic at Moscow Internet Exchange (MSK-IX) than handles half of
          Russian internet traffic

          MSK-IX-NET
          195.208.208.0/21
          </Notes>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.MskIX} />
            </WhiteImageContainer>
            <CountryReportDate>June 2017</CountryReportDate>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <div>
            <CountryReportFinding>Hacktivists added <em>some</em> IPs from MSK-IX-NET
          as <code>A</code> records of blacklisted domain</CountryReportFinding>
            <CountryReportFinding><em>Filtering</em> /32 routes appeared at borders…</CountryReportFinding>
          </div>
          <Appear fid="1" order={1}>
            <CountryReportFinding>8% of traffic is gone</CountryReportFinding>
          </Appear>
          <CountryReportDate>June 2017</CountryReportDate>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.BGP} />
            </WhiteImageContainer>
            <Link href='https://labs.apnic.net/?p=1102'>Geoff Huston, APNIC Labs</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
            baltbet ~300..900
            zenitbet ~600
            grani ~600

          possible threat of routers TCAM overflow possibly leading to
          nation-wide internet outage through DNS abuse that possibly affects
          Russian and South Korean networks according to various opinions and
          DPI deployments recipes
          </Notes>
          <div>
            <CountryReportFinding>~600 domains for "entity" like Grani, BaltBet or ZenitBet<br/>
            (or ~3900 available expired domains per <a href="https://www.facebook.com/phil.kulin/posts/1572877259432666">Phil Kulin's stats</a>)
            </CountryReportFinding>
            <CountryReportFinding>&times; 4093 <code>A</code> DNS RRs per domain name</CountryReportFinding>
            <CountryReportFinding>≈ 2.5M <code>/32</code> routes in RIB and, maybe, TCAM</CountryReportFinding>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} caps textColor="secondary">
            OONI Is
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Open Methodologies
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Open Source Software
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Open Data
          </Heading>
          <Heading size={3} caps fit textColor="secondary">
            Lots of fun!
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
        <Heading>Learn More</Heading>
        <List>
        <ListItem><Link href="https://ooni.torproject.org/">ooni.torproject.org</Link></ListItem>
        <ListItem><Link href="https://api.ooni.io/">api.ooni.io</Link></ListItem>
        <ListItem><Link href="https://explorer.ooni.io/">explorer.ooni.io</Link></ListItem>

        <Heading size={4}>Contacts</Heading>
        <ListItem><Link href="https://slack.openobservatory.org">slack.openobservatory.org</Link></ListItem>
        <ListItem><Link href="mailto:contact@openobservatory.org">contact@openobservatory.org</Link></ListItem>
        </List>
        </Slide>

      </Deck>
    );
  }
}
