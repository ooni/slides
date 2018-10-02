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
  OONIProbeMobileRevampedDashboard: require('../assets/OONIProbeMobile2.jpg'),
  OONIProbeMobileRevampedResults: require('../assets/OONIProbeMobile1.jpg'),
  OONICLI1: require('../assets/OONICLI.1.png'),
  OONICLI2: require('../assets/OONICLI.2.png'),
  OONIExplorerRevamped: require('../assets/OONIExplorerRevamped.png'),
  OONIProbeDesktopDashboard: require('../assets/OONIProbeDesktop.png'),
  OONIBlob: require('../assets/ooniblob.jpg'),

  PartnerKarisma: require('../assets/PartnerKarisma.jpg'),
  PartnerParadigm: require('../assets/PartnerParadigm.jpg'),
  PartnerTAHURID: require('../assets/PartnerTAHURID.jpg'),
  PartnerTEDIC: require('../assets/PartnerTEDIC.jpg'),
  OONIParknet: require('../assets/OONIParknet.png'),
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
          <Heading size={2}>
          State of the Onion
          </Heading>
          <Image width='300px' style={{paddingTop: '30px'}} src={images.OONIHorizontalColor} />
          <Heading size={6}>
          Tor Meeting, Mexico City, 2nd October 2018
          </Heading>
          <Text style={{color: colors.palette.blue5}}>https://slides.ooni.io/2018/Tor-Meeting-Mexico</Text>
        </Slide>

        <Slide transition={["zoom"]} bgColor="white">
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
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
              <Heading size={4} style={{paddingTop: '20px'}}>Velocidad y redimiento</Heading>
            </NettestType>
          </Layout>
          <Heading size={2} textColor="primary" caps style={{paddingTop: '40px'}}>Test OONI</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={1} caps textColor="secondary">
          Puntos claves
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            <BlueNumber>30</BlueNumber> informes de ricerca publicadas
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            <BlueNumber>25</BlueNumber> accuerdos con associaciònes
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            Es un equipo de <BlueNumber>7</BlueNumber> personas
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            <BlueNumber>200+</BlueNumber> paises, <BlueNumber>4.5k</BlueNumber> redes cada mes
          </Heading>
          <Heading size={2} caps fit textColor="primary">
            <BlueNumber>20k+</BlueNumber> usuarios activos por mes
          </Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Mention also collateral damange of blocking telegram in Russia.
          </Notes>
        <Heading size={2} caps fit textColor="primary">
          <BlueNumber>9</BlueNumber> nuevos informes publicados desde Marzo 2018
        </Heading>
        <Text>The State of Internet Censorship in <BlueNumber>Venezuela</BlueNumber></Text>
        <Text><BlueNumber>South Sudan</BlueNumber>: Measuring Internet Censorship in the World&#39;s Youngest Nation</Text>
        <Text><BlueNumber>Mali</BlueNumber>: Social media disruptions amid 2018 presidential election?</Text>
        <Text>The State of Internet Censorship in <BlueNumber>Egypt</BlueNumber></Text>
        <Text><BlueNumber>Ethiopia</BlueNumber>: Verifying the unblocking of websites</Text>
        <Text><BlueNumber>Nigeria</BlueNumber>: Measuring Internet Censorship</Text>
        <Text><BlueNumber>Sierra Leone</BlueNumber>: Network disruptions amid 2018 runoff elections</Text>
        <Link>https://ooni.torproject.org/post/</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Notes>
          Karisma, Colombia
          Paradigm, Nigeria
          Tahurid, South Sudan
          Tediic, Paraguay
          </Notes>
          <Flex>
          <Box w={1/2}>
          <Image src={images.PartnerKarisma} width='300px' />
          </Box>
          <Box w={1/2}>
          <Image src={images.PartnerParadigm} width='300px'/>
          </Box>
          <Box w={1/2}>
          <Image src={images.PartnerTAHURID} width='300px'/>
          </Box>
          <Box w={1/2}>
          <Image src={images.PartnerTEDIC} width='300px'/>
          </Box>
          </Flex>
          <Heading size={2} caps fit textColor="primary">
            <BlueNumber>4</BlueNumber> new partners since March 2018
          </Heading>
        </Slide>


        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.OONIParknet} width='800px'/>
          <Link>https://youtu.be/QslsL84jx4E</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} textColor="primary">
          OONI Probe 3.0.0
          </Heading>
          <Flex align='center' justify='center'>
          <Box>
          <Image src={images.OONICLI1} />
          </Box>
          <Box pl={2}>
          <Image src={images.OONICLI2} />
          </Box>
          </Flex>
          <Link>https://github.com/ooni/probe-cli/releases/tag/v3.0.0-beta.1</Link>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={4} textColor="primary">
            OONI Probe Desktop
          </Heading>
          <Image src={images.OONIProbeDesktopDashboard} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={4} textColor="primary">
            OONI Probe Mobile Modernizada
          </Heading>
          <Flex align='center' justify='center'>
          <Box>
          <Image src={images.OONIProbeMobileRevampedDashboard} width='300px'/>
          </Box>
          <Box pl={2}>
          <Image src={images.OONIProbeMobileRevampedResults} width='300px'/>
          </Box>
          </Flex>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={4} textColor="primary">
            OONI Explorer Modernizada
          </Heading>
          <Image src={images.OONIExplorerRevamped} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading>Learn More</Heading>
          <List>
          <ListItem><Link href="https://ooni.torproject.org/">https://ooni.torproject.org/</Link></ListItem>
          <ListItem><Link href="https://api.ooni.io/">https://api.ooni.io/</Link></ListItem>
          <ListItem><Link href="https://explorer.ooni.io/">https://explorer.ooni.io/</Link></ListItem>

          <Heading size={4}>Contacts</Heading>
          <ListItem><Link href="https://slack.openobservatory.org/">https://slack.openobservatory.org/</Link></ListItem>
          <ListItem><Link href="mailto:contact@openobservatory.org">contact@openobservatory.org</Link></ListItem>
          <ListItem><Link href="https://twitter.com/openobservatory/">@OpenObservatory</Link></ListItem>
          </List>
        </Slide>

      </Deck>
    );
  }
}
