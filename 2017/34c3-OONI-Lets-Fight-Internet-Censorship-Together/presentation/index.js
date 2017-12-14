// Import React
import React from "react"

import styled from 'styled-components'

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
  Appear
} from "spectacle"


// Import theme
import theme from "../themes/ooni/index.js";

import WorldDots from './WorldDots'

const images = {
  CCCLogo: require("../assets/34C3Logo.svg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg")
};

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
          <Heading textColor="quarternary">What is Internet Censorship?</Heading>
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
      </Deck>
    );
  }
}
