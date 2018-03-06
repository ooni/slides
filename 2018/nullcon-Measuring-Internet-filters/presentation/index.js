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
  SyncVerticalMonochrome: {
    src: require("ooni-components/components/svgs/logos/Sync-VerticalMonochrome.svg"),
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
          <Notes>
            <p>I'm Leonid, developer and data miner in OONI, The Tor Project.</p>
            <p>And I'm going to talk a bit about out project measuring Internet
            filters worldwide and, sometimes, discovering some funny incidents
            that may be to some extent considered nation-wide cybersecurity
            threats.</p>
          </Notes>
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
          <Notes>
            There are lots of &quot;Internet filters&quot; out there:
            <ul>
            <li>parental control (that is mandatory in some countries)</li>
            <li>public-space internet filters for city-wide WiFi and libraries</li>
            <li>children protection for schools and, sometimes, universities</li>
            <li>corporate proxies and DLP systems enforcing some policy</li>
            </ul>
            These are not the filters that we are looking for.
          </Notes>
          <Heading size={2} caps textColor="quarternary">What is</Heading>
          <Heading textColor="quarternary">Internet Censorship?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>We aim to measure state-wide Internet filters that turn <em>Internet</em> into <em>Filternet</em>.</p>
            <p>There are many declared reasons to build state-wide Filternet:</p>
            <ul>
            <li>copyright infringement protection</li>
            <li>drug trading prevention</li>
            <li>hatespeech blocking</li>
            <li>disrupting communications for violent (or non-violent) protesters</li>
            <li>court ruling enforcement</li>
            <li>protecting children from learning about sex and all that adult stuff</li>
            <li>protecting private life of people from journalists researching on them as part of The Right To Be Forgotten</li>
            </ul>
            <p>That may be considered censorship as it basically limits speech.</p>
            <p>Or may be not as the policy is enforced post-factum and there is no need to get an "approval" to post stuff in the Internet.</p>
          </Notes>
          <DefinitionTerm>Internet Censorship <DefinitionFonetics>|ˈɪntənɛt sɛnsərʃɪp|</DefinitionFonetics></DefinitionTerm>
          <List ordered>
            <DefinitionItem><Definition>a distortion of the reality of the Internet created by those in power.</Definition></DefinitionItem>
            <DefinitionItem><Definition>another term for <span style={{color: colors.OONI_BLUE}}>FILTERNET</span>.</Definition></DefinitionItem>
          </List>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Notes>
            <p>That's the matter OONI, The Open Observatory of Network Interference, tries to capture, measure and understand.</p>

            <p>OONI is a non-profit under The Tor Project umbrella.</p>

            <p>As I say the word Tor, I'd like to highlight the fact that despite
            close relationships with this NGO that build The Onion Router and
            helps volunteers to maintain the Tor network providing anonymity
            to millions of users, despite all of that OONI is quite different
            project.</p>

            <p>It's devoted to active measurements from the edge of the Internet
            and is much closer in it's goals and methods to RIPE Atlas network
            than to Tor network.</p>
          </Notes>
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>OONI as a project openly documents it's methodologies trying to
            understand what websites to test for. Unfortunately, most of
            countries are not transparent in terms of blocking, they do not
            publish the blacklists.</p>
            <p>OONI develops methodologies trying to distinguish temporary network failures from actual filtering.</p>
            <p>OONI implements those methodologies as open source software.</p>
            <p>And that software collects network measurements data. Open data that is available for anyone to do further research.</p>
          </Notes>
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
          <p>What sort of research is possible? Islamic Republic of Iran is often
          mentioned as one of examples as soon as someone says &quot;Internet
          censorship&quot;.</p>

          <p>Indeed, thousands of network measurements collected by OONI Probe from 60
          local networks across Iran over the last three years have confirmed
          the blocking of ~1000 URLs, including Facebook Messenger, Instagram and such.</p>

          <p>There are other reasons to observe Filternet from that vantage point.<br/>
          For example, export laws make website block acccess FROM Iran.</p>
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
            <p>But mentioning country names like Iran and China in every discussion on Internet censorship is kinda boring.</p>

            <p>Another recent example comes from Europe. And it's not about The
            Pirate Bay, it's about Catalonia and it's referendum on
            independence from Spain.</p>

            <p>OONI measurements confirmed the blocking of at least 25 sites related to the Catalan referendum</p>
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
            <p>And sometimes it's even more strange. Sometimes the case looks like a censorship, feels like a censorship, and quacks like a censorship.</p>

            <p>Just imagine a news portal that is related to one of the oldest
            newspapers in Brazil. Imagine that media being unreachable from
            lots of networks across Brazil and browsers showing DNS
            failures.</p>

            <p>But that case also looked like DNS delegation misconfiguration
            that caused the domain to be unresolvable for users of Internet
            Service Providers running bind nameserver as their recursive resolver.</p>
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
          <Notes>
          <p>But, you know, being a representative both of United States-based
          NGO and a person who can be called <em>Russian Hacker</em>, I don't
          want to talk on political stuff as any opinion I express may be seen
          as biased opinion.</p>
          <p>I'd rather describe technical part of OONI project and some
          interesting incidents I've seen in this area.</p>
          </Notes>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.WikileaksTweet} />
            </WhiteImageContainer>
            <Link href='https://twitter.com/wikileaks/status/948320651407962112'>twitter.com/statuses/948320651407962112</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading textColor="quarternary">OONI Software Ecosystem</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          OONI ecosystem consists of several layers.
          <ul>
          <li>That's Measurement Kit, the C++ library implementing cross-platform code for measurements.</li>
          <li>That's OONI Probe, the app for desktops, servers and mobiles running active measurements from the network edge.</li>
          <li>That's OONI Pipeline that ingests the data, processes it and makes it available via OONI API and OONI Explorer.</li>
          <li>That's OONI Protheus and OONI Run, systems that order OONI Probe to run some specific measurements.</li>
          </ul>
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
          <p>OONI implements variety of measurements including tests for website
          reachability, ability of Instant Messaging Apps and Censorship
          Circumvention tools like Tor to function.</p>
          <p>OONI Probe also tries to capture network performance data and
          understand middlebox existence exploring network reaction to various
          protocols.</p>
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
          <p>The app is currently available for most of popular platforms: Linux, MacOSX, Android and iOS devices.
          So, it's available almost everywhere besides, probably, the most popular platform, Windows Desktop.</p>
          <p>We're working on that.</p>
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
            You can see some screenshots of the mobile app. It's not that geeky :-)
          </Notes>
          <PhoneCarousel screenshots={[
            images.MobileAppScreenshot1,
            images.MobileAppScreenshot2,
            images.MobileAppScreenshot3
          ]}/>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIProbeScreenshot}>
          <Notes>
            <p>Our desktop app is currently not that fancy and native as it's user interface is basically a webserver running locally.</p>
            <p>That has some obvious drawbacks and we're currently working on cross-platform desktop app as well. Hopefully, some beta will be released this year.</p>
          </Notes>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIRunScreenshot}>
          <Notes>
            <p>OONI Run is basically an webapp to generate a deeplink for OONI Probe to handle.</p>
            <p>So you can share that link across your social network to gather some measurements of network endpoints that are not currently measured.</p>
            <p>That's implemented that way because OONI Probes should not be running measurements against URLs that were not reviewed for basic safety.</p>
          </Notes>
          <FloatingLink url='https://run.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          <p>The measurement data OONI Probe collects is processed with the pipeline and published at several endpoints.</p>
          <p>OONI Explorer, OONI API and public Amazon S3 bucket</p>
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
          <p>OONI Explorer is a website devoted to fulfill basic human
          curiosity about OONI Data: it shows the measurements we collect and
          allows some filtering like checking if some specific website is
          tested or, maybe, blocked.</p>
          </Notes>
          <FloatingLink url='https://explorer.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIAPIScreenshot}>
          <Notes>
          <p>OONI API is the backend powering OONI Explorer. That's some
          imperfect REST API on top of database strong measurements metadata.
          It allows to list known measurements or fetch some subset of them.</p>
          </Notes>
          <FloatingLink url='https://api.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          <p>Some research questions need full scan over whole dataset, for example, mining for new blockpages or features that are not available as metadata.</p>
          <p>The dataset is not that huge, something around 8 Terabytes uncompressed, but implementing alike lookups within REST API is not that easy.</p>
          <p>So, thanks to Amazon Open Data program, OONI Data is available as an ordinary S3 bucket for anyone to scan.</p>
          </Notes>
          <Heading size={1} textColor="secondary">Go RAW!</Heading>
          <Heading size={3} textColor="primary">Mining OONI data</Heading>
          <Link textColor="primary" href='https://ooni.torproject.org/post/mining-ooni-data'>ooni.torproject.org/post/mining-ooni-data</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Notes>
          <p>And a reminder, if you see something strange in the data, don't hesitate to look at the source code, maybe that's just some bug in measurement code.</p>
          </Notes>
          <Image src={images.SourceLuke} />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="quaternary">
          <Notes>
          <p>And now I'd like to tell some anecdotes about abuse of the systems those are designed to serve and protect.</p>
          </Notes>
          <Heading size={2} textColor="quarternary">What's wrong with</Heading>
          <Heading textColor="quarternary">Internet Censorship?</Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEgypt} bgDarken={0.7} bgSize='120%'>
          <Notes>
          <p>The first example comes from Egypt. It started as people at IRC
          and DigitalOcean forums complaining about SSH being extremely
          unreliable from Egypt.  Then HTTPS protocol joined the SSH.</p>
          <p>But, all in all it's just another block in the firewall, I highlight this case for another reason.</p>
          <p>There were also complains coming from people seeing
          pop-under advertisements.  And their computers were clean according
          to anti-virus scanners and their routers also seemed to be okay.
          Thanks to anonymous cypherpunk, a reproducible case was found.</p>
          <p>10% of HTTP traffic having mobile User-Agents towards most popular
          adult websites from Alexa rank was redirected to some shady
          advertisement campaign.  I name it shady not only because of pop-under ads.
          We've successfully captured a sample that was classified as malware by
          VirusTotal. That sample was served to user instead of porn as a part of the campaign.</p>
          <p>[&#x1f5b0;]</p>
          <p>Various IP packets characteristics suggested that it was not
          compromised LAN router or compromised website responsible for the
          redirection, these characteristics suggested that it was
          approximately same network filtering equipment that was doing
          aforementioned SSH and HTTPS filtering.</p>
          <p>So, if Internet is really for porn, that campaign could actually be a noticeable threat for Egyptian networks.</p>
          <p>The issue was resolved quite quickly after the report.</p>
          </Notes>
          <CountryReportFinding>HTTPS throttled,  AlexaTop50 adult websites serving malware.<br/>Users complaining for months.</CountryReportFinding>
          <Appear fid="1" order={1}>
            <CountryReportFinding>Unauthorised access to DPI configuration? Corrupt sysadmin?</CountryReportFinding>
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
          <p>Other anecdotes come from Russia.</p>
          <p>[&#x1f5b0;]</p>
          <p>Some TLS certificates come with OCSP, Online Certificate Status Protocol.</p>
          <p>And TLS libraries implement OCSP and users suffer when OCSP fails.</p>
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
          <Notes>
            <p>The court ruled to ban some gambling app.</p>
            <p>And experts tried to understand how to ban the app.</p>
            <p>And something went wrong during the expertise.</p>
            <p>[&#x1f5b0;]</p>
            <p>Because Digicert OCSP responders were also banned as a result.</p>
            <p>That caused some collateral damage making popular websites like Facebook and Wikipedia slow or unreachable depending on browser policy.</p>
            <p>And, of course, it put some significant load on ISPs' customer support services.</p>
          </Notes>
          <div>
            <CountryReportFinding>Prosecutor's experts try to ban gambling app endpoints<br/>
            Probably, enumerating them with network sniffer…
            </CountryReportFinding>
          </div>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportFinding>Digicert OCSP responders are gone</CountryReportFinding>
            <CountryReportFinding>Chrome and Firefox lag, Safari can't access Wikipedia & Facebook at all</CountryReportFinding>
            </div>
          </Appear>
          <CountryReportDate>October 2016</CountryReportDate>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
            <p>Another story is about Moscow Internet Exchange traffic disruption
            caused by by some small count of DNS records.</p>
          </Notes>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.MskIX} />
            </WhiteImageContainer>
            <CountryReportDate>June 2017</CountryReportDate>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
            <p>Hacktivists added some small subset of IP addresses from Moscow Internet Exchange IP network  as A records of some of blacklisted domain.</p>
            <p><em><small>It was from <code>195.208.208.0/21</code> according to announces from MSK IX.</small></em></p>
            <p>And the domain was resolved to some subset of most-specific IP routes in filtering subsystem.</p>
            <p>[&#x1f5b0;]</p>
            <p>And these most-specific routes appeared at some border routers. And, probably, it caused some peering issues. At least 8% of traffic was gone from Internet Exchange as we've seen in the picture.</p>
          </Notes>
          <div>
            <CountryReportFinding>Hacktivists added <em>some</em> IPs from MSK-IX-NET as <code>A</code> records of blacklisted domain</CountryReportFinding>
            <CountryReportFinding><em>Filtering</em> /32 routes appeared at some border routers…</CountryReportFinding>
          </div>
          <Appear fid="1" order={1}>
            <CountryReportFinding>8% of traffic is gone</CountryReportFinding>
          </Appear>
          <CountryReportDate>June 2017</CountryReportDate>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
            <p>And the last one. That is not even an anecdote but a sad fairy tale.</p>
            <p>That's the chart of BGP table growth. And you probably remember some issues with connectivity couple of years ago when the table hit the limit of half a million routes.</p>
          </Notes>
          <div>
            <WhiteImageContainer>
            <Image height='600px' src={images.BGP} />
            </WhiteImageContainer>
            <Link href='https://labs.apnic.net/?p=1102'>Geoff Huston, APNIC Labs</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfRussia} bgDarken={0.7} bgSize='100%'>
          <Notes>
            <p>So what's the fairy tale about?</p>
            <p>Russia blocks not only websites, it also blocks website mirrors.</p>
            <p>Entities like BaltBet, ZenitBet and Grani have control over several hundreds of blacklisted domains. These entities are gambling and opposition media websites.</p>
            <p>Other entities can take some subset of expired domains those are available for registration and are still stored in the blacklist.</p>
            <p>Every domain can carry four thousands IP addresses in a single DNS reply to `A` query.</p>
            <p>And these IP addresses are actually added to some routing tables of major IP-transit networks. That can be safely verified through traceroutes and looking glasses.</p>
            <p>So, each of these entities can basically add two millions and a half of routes to routing table that is probably enough to take all TCAM of a modern router.</p>
            <p>It's unclear if it'll cause any significant damage, but alike incidents caused some quite noticeable damage in the past. Anyway, doing full-scaled study like that is not legal, so I can just assume results of alike experiment.</p>
          </Notes>
          <div>
            <CountryReportFinding>Single domain with 2000 IP addresses leads to 2000 /32 routes according to traceroutes and ISP looking glasses.</CountryReportFinding>
            <CountryReportFinding>~600 domains for mirrors of single "entity" like Grani, BaltBet or ZenitBet<br/>
            (or ~3900 available expired domains per <a href="https://www.facebook.com/phil.kulin/posts/1572877259432666">Phil Kulin's stats</a>)
            </CountryReportFinding>
            <CountryReportFinding>&times; 4093 <code>A</code> DNS RRs per domain name</CountryReportFinding>
            <CountryReportFinding>≈ 2.5M <code>/32</code> routes in RIB and, maybe, TCAM</CountryReportFinding>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
            <p>So I told these stories to remind that Internet Censorship is not only political issue.</p>
            <p>It's not only about human rights and such.</p>
            <p>It can also turn out to affect some security aspects of state-wide networks.</p>
            <p>And doing that sort of research is lots of fun.</p>
          </Notes>
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
        <Notes>
          <p>Thank you!</p>
        </Notes>
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
