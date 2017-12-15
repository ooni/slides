// Import React
import React from "react"

import styled from 'styled-components'

import chroma from 'chroma-js'
import { colors } from 'ooni-components'

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
  Link
} from "spectacle"


// Import theme
import theme from "../themes/ooni/index.js";

import WorldDots from './WorldDots'

const images = {
  CCCLogo: require("../assets/34C3Logo.svg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
  FlagOfCuba: require("../assets/Flag_of_Cuba.svg"),
  FlagOfEthiopia: require("../assets/Flag_of_Ethiopia.svg"),
  FlagOfIndonesia: require("../assets/Flag_of_Indonesia.svg"),
  FlagOfIran: require("../assets/Flag_of_Iran.svg"),
  FlagOfPakistan: require("../assets/Flag_of_Pakistan.svg"),
  BlockedDomainsInIran: require("../assets/BlockedDomainsInIran.svg")
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
top: 0;
right: 0;
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
`

const ArrowContainer = styled.div`
  position: absolute;
  top: ${props => props.top}px;
  left: ${props => props.left}px;
`

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]}>
          <WatermarkImage width="200px" src={images.CCCLogo}/>
          <Image style={{paddingBottom: '30px'}} width="600px" src={images.OONIHorizontalColor} />
          <Heading size={2}>
            Lets Fight Internet Censorship Together
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="quaternary">
          <Heading size={2} textColor="quarternary">What is</Heading>
          <Heading textColor="quarternary">Internet Censorship?</Heading>
        </Slide>
        <Slide transition={["fade"]}>
          <DefinitionTerm>Internet Censorship <DefinitionFonetics>|ˈɪntənɛt sɛnsərʃɪp|</DefinitionFonetics></DefinitionTerm>
          <List ordered>
            <DefinitionItem><Definition>a distortion of the reality of the Internet created by those in power.</Definition></DefinitionItem>
            <DefinitionItem><Definition>another term for <span style={{color: colors.OONI_BLUE}}>FILTERNET</span>.</Definition></DefinitionItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]}>
          <Image width="300px" src={images.OONIVerticalColor} align='right'/>
          <Heading size={3} textColor="primary">The Open Observatory of Network Interference</Heading>
          <WorldDotsBg>
            <WorldDots primaryColor={colors.palette.blue5} highlightColor={colors.palette.blue9}/>
          </WorldDotsBg>
        </Slide>
        <Slide transition={["fade"]}>
          <Heading size={3} caps fit textColor="secondary">
            OONI IS ABOUT
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
            <Heading size={3} caps fit textColor="secondary">
              Reproducible Research
            </Heading>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.FlagOfEthiopia} bgDarken={0.7} bgSize='120%'>
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
            <CountryReportHeading>Ethiopia&#39;s wave of political protests</CountryReportHeading>
          </Appear>
          <Appear fid="4" order={4}>
            <Link href='https://ooni.torproject.org/post/ethiopia-report/'>https://ooni.torproject.org/post/ethiopia-report/</Link>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.FlagOfIndonesia} bgDarken={0.7} bgSize='120%'>
          <Appear fid="2" order={2}>
            <CountryReportFinding>Vimeo and Reddit blocked even though the ban was liften more than 2 years ago</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>Blocked URLs include LGBT sites, an online translator and sites providing information on AIDS/HIV prevention</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <CountryReportHeading>Indonesia</CountryReportHeading>
          </Appear>
          <Appear fid="4" order={4}>
            <Link href='https://ooni.torproject.org/post/indonesia-internet-censorship/'>https://ooni.torproject.org/post/indonesia-internet-censorship/</Link>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgImage={images.FlagOfPakistan} bgDarken={0.7} bgSize='120%'>
          <Appear fid="2" order={2}>
            <CountryReportFinding>"Smart Filters" selectively blocking access to specific web pages on HTTP.</CountryReportFinding>
          </Appear>
          <Appear fid="3" order={3}>
            <CountryReportFinding>Blocked URLs include sites run by ethnic minority groups and expressing religious criticism.</CountryReportFinding>
          </Appear>
          <Appear fid="1" order={1}>
            <CountryReportHeading>Pakistan</CountryReportHeading>
          </Appear>
          <Appear fid="4" order={4}>
            <Link href='https://ooni.torproject.org/post/pakistan-internet-censorship/'>https://ooni.torproject.org/post/pakistan-internet-censorship/</Link>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgImage={images.FlagOfIran} bgDarken={0.7} bgSize='120%'>
          <Appear fid="1" order={1}>
            <CountryReportHeading>Iran</CountryReportHeading>
          </Appear>
          <Appear fid="1" order={2}>
            <WhiteImageContainer>
            <Image height='600px' src={images.BlockedDomainsInIran} />
            </WhiteImageContainer>
          </Appear>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary">
          <Heading textColor="quarternary">OONI Software Ecosystem</Heading>
        </Slide>

        <Slide transition={["fade"]}>
          <EcosystemContainer>
          <ArrowContainer top={GRID_HEIGHT - 140} left={100} >
            <Arrow dir='left' />
            <Text textColor="secondary" style={{'position': 'absolute', 'top': '30px'}}>More User facing</Text>
          </ArrowContainer>
          <ArrowContainer top={GRID_HEIGHT - 140} left={GRID_WIDTH + 300} >
            <Arrow dir='right' />
            <Text textColor="secondary" style={{'position': 'absolute', 'top': '30px'}}>Less User facing</Text>
          </ArrowContainer>
          <ArrowContainer top={GRID_HEIGHT} left={GRID_WIDTH + 140} >
            <Arrow dir='down' />
            <Text textColor="secondary" style={{'position': 'absolute', 'top': '0px', 'left': '-140px', 'transform': 'rotate(-90deg)'}}>More Developer friendly</Text>
          </ArrowContainer>
          <ArrowContainer top={GRID_HEIGHT - 300} left={GRID_WIDTH + 140} >
            <Arrow dir='up' />
            <Text textColor="secondary" style={{'position': 'absolute', 'top': '30px', 'left': '40px', 'transform': 'rotate(-90deg)'}}>More User friendly</Text>
          </ArrowContainer>
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

        <Slide transition={["fade"]} bgImage={images.FlagOfCuba} bgDarken={0.7} bgSize='120%'>
          <Heading textColor="quarternary">XXX Insert video from cuba</Heading>
        </Slide>

      </Deck>
    );
  }
}
