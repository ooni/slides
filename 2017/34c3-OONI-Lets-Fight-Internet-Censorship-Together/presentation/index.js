// Import React
import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors } from 'ooni-components'

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


// Import theme
import theme from "../themes/ooni/index.js";

import WorldDots from './WorldDots'

const images = {
  CCCLogo: require("../assets/34C3Logo.svg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
  ProbeVerticalColor: require("ooni-components/components/svgs/logos/Probe-VerticalColor.svg"),
  PipelineHorizontalMonochrome: require("ooni-components/components/svgs/logos/Pipeline-HorizontalMonochrome.svg"),
  APIHorizontalMonochrome: require("ooni-components/components/svgs/logos/API-HorizontalMonochrome.svg"),
  ExplorerHorizontalMonochrome: require("ooni-components/components/svgs/logos/Explorer-HorizontalMonochrome.svg"),
  FlagOfCuba: require("../assets/Flag_of_Cuba.svg"),
  FlagOfEthiopia: require("../assets/Flag_of_Ethiopia.svg"),
  FlagOfIndonesia: require("../assets/Flag_of_Indonesia.svg"),
  FlagOfIran: require("../assets/Flag_of_Iran.svg"),
  FlagOfPakistan: require("../assets/Flag_of_Pakistan.svg"),
  FlagOfSpain: require("../assets/Flag_of_Spain.svg"),
  BlockedDomainsInIran: require("../assets/BlockedDomainsInIran.svg"),
  MiddleBoxes: require("../assets/MiddleBoxes.svg"),
  PerformanceBolt: require("../assets/PerformanceBolt.svg"),
  WebCensorshipCross: require("../assets/WebCensorshipCross.svg"),
  OnionBlue: require("../assets/Onion_Blue_Icon.svg"),
  Nexus5: require("../assets/Nexus5.svg"),
  Nexus5Left: require("../assets/Nexus5Left.svg"),
  Nexus5Right: require("../assets/Nexus5Right.svg"),
  MobileAppScreenshot1: require("../assets/MobileAppScreenshot1.jpg"),
  MobileAppScreenshot2: require("../assets/MobileAppScreenshot2.jpg"),
  MobileAppScreenshot3: require("../assets/MobileAppScreenshot3.jpg"),
  MobileAppScreenshot4: require("../assets/MobileAppScreenshot4.jpg"),
  MobileAppScreenshot5: require("../assets/MobileAppScreenshot5.jpg"),
  OONIAPIScreenshot: require("../assets/OONIAPI-Screenshot.png"),
  OONIExplorerScreenshot: require("../assets/OONIExplorer-Screenshot.png"),
  OONIProbeScreenshot: require("../assets/OONIProbe-Screenshot.png"),
  OONIRunScreenshot: require("../assets/OONIRun-Screenshot.png"),
  MKScreenshot: require("../assets/MK-Screenshot.png"),
  MKLogo: require("../assets/Measurement-Kit.png")
};

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

const WatermarkImage = styled(Image)`
position: absolute;
top: -50px;
left: 0;
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
          <WatermarkImage width="300px" src={images.CCCLogo}/>
          <Image style={{paddingBottom: '30px'}} width="600px" src={images.OONIHorizontalColor} />
          <Heading size={2}>
            Lets Fight Internet Censorship Together
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
          <Appear fid="4">
            <div>
            <Heading size={3} caps fit textColor="secondary">
              For Reproducible
            </Heading>
            <Heading size={3} caps fit textColor="secondary">
              Research!
            </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEthiopia} bgDarken={0.7} bgSize='120%'>

          <Notes>
            <h4>Slide notes</h4>
            <ol>
            <li>Report published in December 2016 with Amnesty international</li>
            <li>Mobile blackout in October 2016</li>
            <li>Protests began on the 12 November 2015 in Ginchi, Oromo region.</li>
            <li>State of Emergency from 8 October 2016 until August 2017 (10 month long)</li>
            <li>DPI usage</li>
            </ol>
          </Notes>

          <Appear fid="2" order={2}>
            <CountryReportFinding>WhatsApp Blocked</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>Deep Packet Inspection (DPI) detected</CountryReportFinding>
          </Appear>
          <Appear fid="4" order={4}>
            <CountryReportFinding>Media outlets, LGBT sites, human rights websites,
            political opposition sites & censorship circumvention tool sites found to be
            blocked</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>Ethiopia&#39;s wave of political protests</CountryReportHeading>
            <CountryReportDate>December 2016</CountryReportDate>
            </div>
          </Appear>
          <Appear fid="4" order={4}>
            <Link href='https://ooni.torproject.org/post/ethiopia-report/'>https://ooni.torproject.org/post/ethiopia-report/</Link>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfIndonesia} bgDarken={0.7} bgSize='120%'>
          <Notes>
          <h4>Notes</h4>
          <ol>
          <li>We saw a lot of difference in results from network to network.</li>
          <li>Vimeo and Reddit were found to be blocked in some networks in Indonesia even though ban was lifted more than 2 years ago</li>
          <li>Sites expressing criticism towards Islam were found to be blocked</li>
          <li>Indonesian ISPs are granted the authority to ban “negative content” at their own discretion, regardless of whether such sites are included in the MICT’s official Trust Positif blocklists</li>
          </ol>
          </Notes>

          <Appear fid="2" order={2}>
            <CountryReportFinding>Vimeo and Reddit blocked even though the ban was lifted more than 2 years ago</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>Blocked URLs include LGBT sites, an online translator and sites providing information on AIDS/HIV prevention</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>Indonesia</CountryReportHeading>
            <CountryReportDate>May 2017</CountryReportDate>
            </div>
          </Appear>
          <Appear fid="4" order={4}>
            <Link href='https://ooni.torproject.org/post/indonesia-internet-censorship/'>https://ooni.torproject.org/post/indonesia-internet-censorship/</Link>
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
            <Link href='https://ooni.torproject.org/post/iran-internet-censorship/'>https://ooni.torproject.org/post/iran-internet-censorship/</Link>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfSpain} bgDarken={0.7} bgSize='120%'>
          <Notes>
            <h4>Speaker notes</h4>
            <ol>
            <li>Confirm the blocking of at least 25 sites related to the Catalan referendum</li>
            </ol>
          </Notes>
          <Appear fid="2" order={2}>
            <CountryReportFinding>At least 25 websites related to the Catalonia Independence Referendum were blocked.</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>The .cat registry was raided and forced to take down many websites.</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>Spain</CountryReportHeading>
            <CountryReportDate>October 2017</CountryReportDate>
            </div>
          </Appear>
          <Appear fid="4" order={4}>
            <Link href='https://ooni.torproject.org/post/internet-censorship-catalonia-independence-referendum/'>https://ooni.torproject.org/post/internet-censorship-catalonia-independence-referendum/</Link>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading textColor="quarternary">OONI Software Ecosystem</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
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
          <Image src={images.MKLogo} width='160px'/>
          <Heading size={2} textColor="primary">Measurement Kit</Heading>
          <List>
            <ListItem>C++14 library that implements all the network measurement tests we support.</ListItem>
            <ListItem>Available on Unix and soon on Windows</ListItem>
            <ListItem>Has JNI and Node.js bindings.</ListItem>
          </List>
          <FloatingLink url='https://github.com/measurement-kit/measurement-kit' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
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

        <Slide transition={["fade"]} bgColor="white">
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
              <Heading size={4} style={{paddingTop: '20px'}}>Middle Boxes</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.PerformanceBolt} height="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Speed & Performance</Heading>
            </NettestType>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <PhoneCarousel screenshots={[
            images.MobileAppScreenshot1,
            images.MobileAppScreenshot2,
            images.MobileAppScreenshot3
          ]}/>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIProbeScreenshot}>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIRunScreenshot}>
          <FloatingLink url='https://run.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" style={{paddingBottom: '40px'}}>Open Data</Heading>
          <Layout>
            <Fill style={{'text-align': 'left', marginRight: '40px'}}>
              <Image style={{margin: '0'}} src={images.PipelineHorizontalMonochrome} height="100px" />
              <Image style={{margin: '0'}} src={images.APIHorizontalMonochrome} height="79px" />
              <Image style={{margin: '0'}} src={images.ExplorerHorizontalMonochrome} height="100px" />
            </Fill>
            <Fill>
              <Text>Provides <b>evidence</b> of censorship events</Text>
              <Text><b>Transparency</b> of global internet controls</Text>
              <Text>Allows researchers to conduct <b>independent studies</b> & to explore other research questions</Text>
              <Text>Allows the public to <b>verify</b> our findings</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIExplorerScreenshot}>
          <FloatingLink url='https://explorer.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIAPIScreenshot}>
          <FloatingLink url='https://api.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary">Get Out there and Use OONI data!</Heading>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfCuba} bgDarken={0.7} bgSize='120%'>
          <div>
          <CountryReportHeading>Cuba</CountryReportHeading>
          <CountryReportDate>Spring 2017</CountryReportDate>
          </div>

        </Slide>

      </Deck>
    );
  }
}
