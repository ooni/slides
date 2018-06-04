// Import React
import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors } from 'ooni-components'

import 'prismjs/themes/prism.css';

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

const images = {
  RevizorTraf: require("../assets/revizor-traf.jpg"),
  Usher2Morze: require("../assets/usher2-morze.png"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  PipelineHorizontalMonochrome: require("ooni-components/components/svgs/logos/Pipeline-HorizontalMonochrome.svg"),
  APIHorizontalMonochrome: require("ooni-components/components/svgs/logos/API-HorizontalMonochrome.svg"),
  ExplorerHorizontalMonochrome: require("ooni-components/components/svgs/logos/Explorer-HorizontalMonochrome.svg"),
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

  RunVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Run-VerticalMonochrome.svg"),
    top: 0,
    left: GRID_WIDTH
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

const TestKey = styled(Text)`
font-family: monospace;
font-weight: bold;
`

const GithubLink = styled(Text)`
  color: ${colors.palette.blue5};
`

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
  text-align: justify; // darkk: I like it more for two-three line notes :)
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

// slightly better than UL/LI
const LI = styled.p`
  text-align: left;
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


export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="white">
          <Image style={{paddingBottom: '30px'}} width="600px" src={images.OONIHorizontalColor} />
          <Heading size={2}>
          На шаг позади РКН
          </Heading>
          <Heading size={5}>
          Мониторинг ковровых блокировок
          </Heading>
          <Heading size={6}>
          Леонид Евдокимов<br/>
          ENOG 15<br />
          Москва, 5 июня 2018
          </Heading>
        </Slide>

        <Slide bgColor="white">
          <Notes>
            <p>Знакомые слова, не правда ли? Последний вопрос, кстати, от Неугомонного Фила</p>
          </Notes>
          <CountryReportFinding>
            Как же начинает надоедать. Сейчас клиент 10 минут жаловался коллеге, что не может играть в world of trucks. Ещё и извинений требует от нас лично!
          </CountryReportFinding>
          <Appear fid="2" order={2}>
            <CountryReportFinding>
              У нас клиенты воют! Гугл не работает, ютуб не работает, инстаграм не работает, твитч не работает, стим не работает. на некоторых сайтах просто белый экран.
            </CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>
              Слушайте, а что там про инстаграм?
            </CountryReportFinding>
          </Appear>
        </Slide>

        <Slide bgColor="white">
          <Notes>
            Знакомые графики? Это всё примеры мониторинга.
          </Notes>
          <Image width='920px' src={images.RevizorTraf} />
          <Appear fid="2" order={2}>
            <Image width='920px' src={images.Usher2Morze} />
          </Appear>
          <Heading size={3}>Знакомый график?</Heading>
        </Slide>

        <Slide>
          <Heading size={3}>Зачем мониторинг?</Heading>
          <Appear fid="2" order={2}>
            <CountryReportFinding>
              Предотвращать инциденты
            </CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>
              Уведомлять о проблемах первый уровень поддержки
            </CountryReportFinding>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3}>В бане /10. Что «упало»?</Heading>
          <Appear fid="2" order={2}>
            <CountryReportFinding>
              Проверить AS.<br/>
              Перебрать PTR?<br/>
              Изучить кэш DNS–рекурсора?<br/>
              Сканировать zmap http*, собрать <code>GET /</code> и commonName?
            </CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>
              Не быстрее ли использовать открытые данные? :–)
            </CountryReportFinding>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={2} caps fit textColor="primary">
            <Link href='https://scans.io/'>scans.io</Link>
          </Heading>
        </Slide>

        <Slide>
          <Heading size={3} fit>Rapid7 Sonar, FDNS (<code>A</code>)</Heading>
          <LI>Сотни миллионов доменных имён</LI>
          <LI>Еженедельные обновления</LI>
          <LI>Простой <em>grep-friendly</em> json формат!</LI>
          <LI><code>CNAME</code> в комплекте</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>В бане 8 млн доменов…</Heading>
          <Heading size={3} fit>ЧТО «упало»?!</Heading>
        </Slide>

        <Slide>
          <Heading size={3} fit caps>Ранжируй @ Сокращай</Heading>
          <LI>Сокращай: <strike>до TLD</strike>, до <a href="https://publicsuffix.org/">public suffix</a></LI>
          <LI>Ранжируй: Alexa <a href="https://aws.amazon.com/alexa-top-sites/">API</a> и <a href="https://s3.amazonaws.com/alexa-static/top-1m.csv.zip">top 1M</a>, <a href="https://s3-us-west-1.amazonaws.com/umbrella-static/index.html">Cisco Umbrella</a></LI>
        </Slide>

        <Slide>
          <Heading size={2} fit>Это все дико,</Heading>
          <Heading size={2} fit>например</Heading>
          <Appear fid="2" order={2}>
          <Heading size={3} fit>Блоб парсим грепом, например…</Heading>
          </Appear>
        </Slide>

        <Slide>
          <Heading size={3} fit>reddit.com, alexa #6</Heading>
          <LI>Интернет-сообщество</LI>
          <LI><code>out.reddit.com</code>, обёртка вншешних ссылок — 34.230.170.103</LI>
          <LI>и ещё три домена</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>amazon.com, alexa #10</Heading>
          <LI>Инфраструктура?</LI>
          <LI><code>ns-3.amazon.com</code>, DNS сервер — 54.69.236.62</LI>
          <LI>и ещё три NS, и ещё три домена</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>instagram.com, alexa #16</Heading>
          <LI>Соцсеть</LI>
          <LI><code>instagram.com</code>, перенаправление на www  — 34.192.156.80 и 34.193.159.161</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>netflix.com, alexa #32</Heading>
          <LI>Онлайн-кинотеатр</LI>
          <LI><code>api-global.latency.prodaa.netflix.com</code>, кусочки инфраструктуры — 54.148.226.99 и др.</LI>
          <LI><code>netflix.com</code>, перенаправление на www — 54.70.73.70 и др.</LI>
          <LI>полторы сотни доменов, три сотни IP адресов...</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>twitch.tv, alexa #33</Heading>
          <LI>Стриминговый сервис</LI>
          <LI><code>app.twitch.tv</code>, бэкенд для приложения? — 52.72.179.4</LI>
          <LI><code>download.twitch.tv</code>, <code>invite.twitch.tv</code> и десятки других RR</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>dropbox.com, alexa #86</Heading>
          <LI>Облачный сервис хранения</LI>
          <LI><code>paper.dropbox.com</code>, инструменты совместной работы — 34.198.178.230</LI>
          <LI>и ещё четыре домена</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>mozilla.org, alexa #156</Heading>
          <LI>Браузер</LI>
          <LI><code>serviceapi.security.mozilla.org</code> — 35.160.155.26 и др.</LI>
          <LI><code>accounts.firefox.com</code> — 34.210.164.160</LI>
          <LI><code>screenshots.services.mozilla.com</code> — 54.148.151.221 и др.</LI>
          <LI>и десятки других</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>slack.com, alexa #231</Heading>
          <LI>Корпоративный мессенджер</LI>
          <LI><code>upload.slack.com</code>, сервис загрузки файлов — 34.200.60.200 и др.</LI>
          <LI><code>slack-redir.net</code>, обёртка вншешних ссылок — 52.73.151.99 и др.</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>airbnb.com, alexa #280</Heading>
          <LI>Аренда жилья</LI>
          <LI><code>airbnb.com</code>, перенаправление на www — 34.236.9.133 и др.</LI>
          <LI>а также .ru, .hu, .es, и десятки других</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>zendesk.com, alexa #391</Heading>
          <LI>Платформа для корпоративной службы тех.поддержки</LI>
          <LI><code>thumbtacktech.zendesk.com</code>, тех.поддержка омских Thumbtack Technology? — 35.167.245.158</LI>
          <LI>и три тысячи других саппортов от zello до zvooq</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>hp.com, alexa #354</Heading>
          <LI>Производитель оборудования</LI>
          <LI><code>cdn.ext.hp.com</code>, наверняка, CDN — 54.153.34.102</LI>
          <LI>и десятки других доменов</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>wix.com, alexa #439</Heading>
          <LI>Платформа для создания веб–сайтов</LI>
          <LI><code>dns1.wix.com</code> — 13.56.142.82</LI>
          <LI><code>dns2.wix.com</code> — 34.199.12.23</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>mit.edu, alexa #462</Heading>
          <LI>Университет</LI>
          <LI><code>zerorobotics.mit.edu</code>, соревнования по робототехнике — 34.236.164.47</LI>
          <LI>и двадцать доменов</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>strava.com, alexa #855</Heading>
          <LI>Соцсеть для физкультурников и спортсменов</LI>
          <LI><code>strava.com</code>, перенаправление на www — 34.232.140.172</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>kaspersky.com, alexa #2512</Heading>
          <LI>Поставщик решений в области информационной безопасности</LI>
          <LI><code>ics-cybermap.kaspersky.com</code>, карта киберугроз — 54.154.231.219</LI>
          <LI><code>game.kaspersky.com</code>, проект &quot;Game of Threats&quot; — 34.231.45.170</LI>
          <LI>и 7 других доменов, включая blog.kaspersky.com, business.kaspersky.com и др.</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>ted.com, alexa #1097</Heading>
          <LI>Образовательный портал</LI>
          <LI><code>api.ted.com</code>, интерфейс для приложений — 34.198.211.2 и др.</LI>
          <LI>и десятки других доменов сервиса, который повествует о &quot;достойных распространения идеях&quot;...</LI>
        </Slide>

        <Slide>
          <Heading size={3} fit>Итого «задеты»:</Heading>
          <CountryReportFinding>
            41 тысяча доменов из Alexa Top 1M
          </CountryReportFinding>
          <CountryReportFinding>
            7.8 млн. поддоменов из Alexa Top 1M
          </CountryReportFinding>
          <CountryReportFinding>
            12 млн. поддоменов
          </CountryReportFinding>
          <Appear fid="2" order={2}>
            <CountryReportFinding>
            0 социально значимых ресурсов
            </CountryReportFinding>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} fit>Спасибо!</Heading>
          <List>
            <ListItem><Link href="https://ooni.torproject.org/">ooni.torproject.org</Link></ListItem>
            <Heading size={4}>Контакты</Heading>
            <ListItem><Link>leonid@openobservatory.org</Link></ListItem>
            <ListItem><Link>contact@openobservatory.org</Link></ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
