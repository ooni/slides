import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors, Flex, Box } from 'ooni-components'
import {
  NettestGroupInstantMessaging,
  NettestGroupMiddleBoxes,
  NettestGroupPerformance,
  NettestGroupWebsites
} from 'ooni-components/dist/icons'

import 'prismjs/themes/prism.css'

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
import theme from "../../../../components/themes/ooni/index.js";

import WorldDots from '../../../../components/WorldDots'
import PhoneCarousel from '../../../../components/PhoneCarousel'

const images = {
  OONIFOCI: require("../assets/OONI-FOCI-12.png"),
  SourceLuke: require("../assets/source-luke.jpg"),
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

  OnionBlue: require("../assets/Onion_Blue_Icon.svg"),
  MobileAppScreenshot1: require("../assets/MobileAppScreenshot1.jpg"),
  MobileAppScreenshot2: require("../assets/MobileAppScreenshot2.jpg"),
  MobileAppScreenshot3: require("../assets/MobileAppScreenshot3.jpg"),
  MobileAppScreenshot4: require("../assets/MobileAppScreenshot4.jpg"),
  MobileAppScreenshot5: require("../assets/MobileAppScreenshot5.jpg"),
  OONIAPIScreenshot: require("../assets/OONIAPI-Screenshot.png"),
  OONIExplorerScreenshot: require("../assets/OONIExplorer-Screenshot.png"),
  OONIProbeScreenshot: require("../assets/OONIProbe-Screenshot.png"),
  MKScreenshot: require("../assets/MK-Screenshot.png"),
  MKLogo: require("../assets/Measurement-Kit.png"),
  OONIEcosystem: require("../assets/OONIEcosystem.svg"),
  FlagOfEgypt: require("../assets/Flag_of_Egypt.svg"),
  MeasurementKitChart: require("../assets/MeasurementKitChart.png"),
  OnboardingPopQuiz: require('../assets/OnboardingPopQuiz1.png'),
  OnboardingThingsToKnow: require('../assets/OnboardingThingsToKnow.png'),
  OONIArchitectureHorizontal: require('../assets/OONIArchitectureHorizontal.png'),
  OONIOrchestraArchitecture: require('../assets/OONIOrchestraArchitecture.png'),
  OONIProbeMobileRevampedDashboard: require('../assets/OONIProbeMobileRevampedDashboard.png'),
  OONIProbeMobileRevampedResults: require('../assets/OONIProbeMobileRevampedResults.png'),
  OONIExplorerRevamped: require('../assets/OONIExplorerRevamped.png'),
  OONIProbeDesktopDashboard: require('../assets/OONIProbeDesktopDashboard.png'),
  OONIBlob: require('../assets/ooniblob.jpg')
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

const StyledFloatingLink = styled.div`
bottom: calc(-120vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`
const StyledFloatingLinkRight = styled.div`
bottom: calc(-120vh - 50%);
left: calc(50vw - 50%);
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

const FloatingLinkRight = ({url}) => (
  <StyledFloatingLinkRight>
    <StyledPageLinkContainer>
      <StyledPageLink href={url}>{url}</StyledPageLink>
    </StyledPageLinkContainer>
  </StyledFloatingLinkRight>
)

const StyledFloatingQuote= styled.div`
  background-color: white;
  padding-top: 5px;
  padding-bottom: 5px;
`

const StyledFloatingQuoteContainer = styled.div`
bottom: calc(-100vh - 50%);
left: calc(-50vw + 50%);
position: absolute;
width: 100vw;
height: 100vh;
`

const FloatingQuote = ({children}) => (
  <StyledFloatingQuoteContainer>
    <StyledFloatingQuote>
      <Text>{children}</Text>
    </StyledFloatingQuote>
  </StyledFloatingQuoteContainer>
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



const BlueNumber = styled.span`
  color: ${colors.palette.blue5};
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="white">
          <Notes>
          Arturo
          </Notes>
          <Heading size={2}>
          Growing the Open Observatory of Network Interference
          </Heading>
          <Heading size={6}>
          FOCI, Baltimore, 14th August 2018
          </Heading>
          <Heading size={6}>
          Arturo Filastò, Simone Basso
          </Heading>
          <Image width='300px' style={{paddingTop: '30px'}} src={images.OONIHorizontalColor} />
          <Text style={{color: colors.palette.blue5}}>https://slides.ooni.io/2018/FOCI</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Notes>
          Arturo
          OONI is a Free software project (under the Tor Project) aimed at
          empowering decentralized efforts in increasing transparency of
          Internet Censorship around the world.

          The project started in 2012 and have since collected millions of
          measurements from over 200 countries around the world,
          shedding light on various forms of network interference.

          Mention that OONI does not deal with platform censorship (ex. looking
          at blocking of facebook posts or any platform-side censorship or
          restrictions).
          </Notes>
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Arturo
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

        <Slide transition={["zoom"]} bgColor="white">
            <Notes>
            Arturo
            </Notes>
            <Image src={images.OONIFOCI} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
            <Notes>
            Simone
            </Notes>
          <Heading size={2} caps textColor="secondary">
            OONI Today
          </Heading>
          <Appear fid="1">
            <Heading size={2} caps fit textColor="primary">
              <BlueNumber>34</BlueNumber> published research reports
            </Heading>
          </Appear>
          <Appear fid="2">
            <Heading size={2} caps fit textColor="primary">
              Team of <BlueNumber>7</BlueNumber> people working full-time
            </Heading>
          </Appear>
          <Appear fid="3">
            <Heading size={2} caps fit textColor="primary">
              <BlueNumber>200+</BlueNumber> countries, <BlueNumber>4.5k</BlueNumber> networks every month
            </Heading>
          </Appear>
          <Appear fid="4">
            <Heading size={2} caps fit textColor="primary">
              <BlueNumber>20k+</BlueNumber> monthly active users
            </Heading>
          </Appear>
          <Appear fid="5">
            <div>
            <Heading size={2} caps fit textColor="secondary">
              Is a growing global community
            </Heading>
            <Heading size={2} caps fit textColor="secondary">
             of censorship measurement researchers!
            </Heading>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfEgypt} bgDarken={0.7} bgSize='120%'>
          <Notes>
          Simone
          </Notes>
          <Appear fid="2" order={2}>
            <CountryReportFinding>More than 100 media websites were found to be blocked</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>"Defense in depth" strategy for implementing
            blocking: two different middleboxes were found on some
            networks</CountryReportFinding>
          </Appear>
          <Appear fid="4" order={4}>
            <CountryReportFinding>Ad campaign to hijack blocked websites to revenue generating sites</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <div>
            <CountryReportHeading>State of Internet Censorship in Egypt</CountryReportHeading>
            <CountryReportDate>July 2018</CountryReportDate>
            <Link href='https://ooni.io/post/egypt-internet-censorship/'>https://ooni.io/post/egypt-internet-censorship/</Link>
            </div>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Simone
          </Notes>
          <Layout>
            <NettestType>
              <NettestGroupWebsites size="150px" />
              <Heading size={4}>Web Censorship</Heading>
            </NettestType>

            <NettestType>
              <NettestGroupInstantMessaging size="150px" />
              <Heading size={4}>Instant Messaging Apps</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.OnionBlue} height="145px" />
              <Heading size={4}>Censorship Circumvention</Heading>
            </NettestType>

          </Layout>
          <Layout style={{paddingTop: '20px'}}>
            <NettestType>
              <NettestGroupMiddleBoxes size="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Middleboxes</Heading>
            </NettestType>

            <NettestType>
              <NettestGroupPerformance size="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Speed & Performance</Heading>
            </NettestType>
          </Layout>
          <Heading size={2} textColor="primary" caps style={{paddingTop: '40px'}}>OONI tests</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Simone
          </Notes>
          <Image src={images.OONIEcosystem} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Simone
          </Notes>
          <Image src={images.MeasurementKitChart} />
          <Heading size={2}>Measurement Kit</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Notes>
          Simone
          </Notes>
          <PhoneCarousel
            withIcons
            screenshots={[
              images.MobileAppScreenshot1,
              images.MobileAppScreenshot2,
              images.MobileAppScreenshot3
            ]}/>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Arturo until the end
          </Notes>
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
          <Heading textColor="primary" size={2} caps style={{paddingBottom: '40px'}}>Open Data</Heading>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIExplorerScreenshot}>
          <FloatingLink url='https://explorer.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIAPIScreenshot}>
          <FloatingLink url='https://api.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgImage={images.OONIBlob}>
          <FloatingQuote>Big data is anything that won&#39;t fit in Excel</FloatingQuote>
          <FloatingLinkRight url='https://ooni.io/post/mining-ooni-data/' />
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading textColor="quarternary">Challenges and lessons learned</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} textColor="primary">Challenge #1</Heading>
          <Text>Balancing the risks and acquiring informed consent</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
            <Image src={images.OnboardingThingsToKnow} height='600px' />
        </Slide>
        <Slide transition={["fade"]} bgColor="white">
            <Image src={images.OnboardingPopQuiz} height='600px' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} textColor="primary">Challenge #2</Heading>
          <Text>The OONI dataset is now totalling more than <BlueNumber>10 TB</BlueNumber> of data and it grows at a rate of <BlueNumber>~50GB</BlueNumber> per day.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.OONIArchitectureHorizontal} width='1024px' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} textColor="primary">Challenge #3</Heading>
          <Text>Supporting mobile platforms and delivering a consistent user experience.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} textColor="primary">Challenge #4</Heading>
          <Text>Making data easy to access and use, but at the same time not
          making it subject to misinterpretation.</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading textColor="quarternary">The future</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.OONIOrchestraArchitecture} />
          <Heading size={2} textColor="primary">OONI Orchestra</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2}>Methodology improvements</Heading>
          <List>
            <ListItem>R&D of new tests</ListItem>
            <ListItem>More accurate censorship detection heuristics</ListItem>
            <ListItem>Improve ability to detect transient/fuzzy anomaly conditions (eg. throttling)</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Flex align='center' justify='center'>
          <Box>
          <Image src={images.OONIProbeMobileRevampedDashboard} />
          </Box>
          <Box pl={2}>
          <Image src={images.OONIProbeMobileRevampedResults} />
          </Box>
          </Flex>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.OONIExplorerRevamped} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.OONIProbeDesktopDashboard} />
          <Heading size={2} textColor="primary">New desktop apps</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading>Learn More</Heading>
          <List>
          <ListItem><Link href="https://ooni.torproject.org/">https://ooni.torproject.org/</Link></ListItem>
          <ListItem><Link href="https://api.ooni.io/">https://api.ooni.io/</Link></ListItem>
          <ListItem><Link href="https://explorer.ooni.io/">https://explorer.ooni.io/</Link></ListItem>

          <Heading size={4}>Contacts</Heading>
          <ListItem><Link href="https://slack.openobservatory.org/">https://slack.openobservatory.org/</Link></ListItem>
          <ListItem><Link href="mailto:contact+foci18@openobservatory.org">contact@openobservatory.org</Link></ListItem>
          <ListItem><Link href="https://twitter.com/openobservatory/">@OpenObservatory</Link></ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
