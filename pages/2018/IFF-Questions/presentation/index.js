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
  Notes,
  Code
} from "spectacle"

import preload from "spectacle/lib/utils/preloader"

import Terminal from "spectacle-terminal"
import CodeSlide from 'spectacle-code-slide'

import WorldDots from "./WorldDots"

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


// Import theme
import theme from "../themes/ooni/index.js";

const images = {
  OONIVerticalColor: require("ooni-components/components/svgs/logos/OONI-VerticalColor.svg"),
  OONIHorizontalColor: require("ooni-components/components/svgs/logos/OONI-HorizontalColor.svg"),
  PipelineHorizontalMonochrome: require("ooni-components/components/svgs/logos/Pipeline-HorizontalMonochrome.svg"),
  APIHorizontalMonochrome: require("ooni-components/components/svgs/logos/API-HorizontalMonochrome.svg"),
  ExplorerHorizontalMonochrome: require("ooni-components/components/svgs/logos/Explorer-HorizontalMonochrome.svg"),

  TestInstantMessaging: require("../assets/TestInstantMessaging.svg"),
  TestMiddleboxes: require("../assets/TestMiddleboxes.svg"),
  TestPerformance: require("../assets/TestPerformance.svg"),
  TestWebsites: require("../assets/TestWebsites.svg"),

  OnionBlue: require("../assets/Onion_Blue_Icon.svg"),
  OONIAPIScreenshot: require("../assets/OONIAPI-Screenshot.png"),
  OONIExplorerScreenshot: require("../assets/OONIExplorer-Screenshot.png"),
  WebConnectivity: require("../assets/WebConnectivity.png"),
  HTTPInvalidRequestLine: require("../assets/HIRL.png"),
  HTTPHeaderFieldManipulation: require("../assets/HeaderFieldManipulation.png"),
  BaseDataFormat: require("../assets/BaseDataFormat.png"),
  ASNMap1: require("../assets/ASNMap1.png"),
  ASNMap2: require("../assets/ASNMap2.png"),
  OONIBlob: require("../assets/ooniblob.jpg"),
  Nerd: require("../assets/nerd.jpg"),
  Worker: require("../assets/worker.jpg"),
  Hipster: require("../assets/hipster.jpg"),
  YouFinger: require("../assets/YouFinger.svg")
};

preload(images)

// Require CSS
require("normalize.css");

const TestKey = styled(Text)`
font-family: monospace;
font-weight: bold;
`

const GithubLink = styled(Text)`
  color: ${colors.palette.blue5};
`
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

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="white">
          <Heading size={2}>
          Which questions would you like internet censorship data to answer?
          </Heading>
          <Heading size={6}>
          Internet Freedom Festival, Valencia, 7th March 2018
          </Heading>
          <Image width="300px" src={images.OONIHorizontalColor} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">

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

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={2} textColor="primary">OONI Software tests</Heading>
          <Layout style={{paddingTop: '40px'}}>
            <NettestType>
              <Image src={images.TestWebsites} height="150px" />
              <Heading size={4}>Web Censorship</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.TestInstantMessaging} height="150px" />
              <Heading size={4}>Instant Messaging Apps</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.OnionBlue} height="145px" />
              <Heading size={4}>Censorship Circumvention</Heading>
            </NettestType>

          </Layout>
          <Layout style={{paddingTop: '20px'}}>
            <NettestType>
              <Image src={images.TestMiddleboxes} height="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Middleboxes</Heading>
            </NettestType>

            <NettestType>
              <Image src={images.TestPerformance} height="150px" />
              <Heading size={4} style={{paddingTop: '20px'}}>Speed & Performance</Heading>
            </NettestType>
          </Layout>
        </Slide>


        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={3} style={{paddingBottom: '40px'}}>
            Which questions <span style={{color: colors.palette.gray8}}>are</span> answered
          </Heading>
          <List>
          <ListItem>Which <strong>websites</strong> are blocked by that ISP and how are they blocked?</ListItem>
          <ListItem>Is <strong>WhatsApp</strong> blocked and if so, how?</ListItem>
          <ListItem>Does <strong>Tor</strong> without any bridges work in this country?</ListItem>
          <ListItem>Are <strong>middleboxes</strong> used by that ISP? What is the speed of that network?</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={3} style={{paddingBottom: '40px'}}>
            Which questions <span style={{color: colors.palette.gray8}}>could</span> be answered
          </Heading>
          <List>
          <ListItem>Which website is <strong>blocked the most</strong> in the world?</ListItem>
          <ListItem>Are <strong>net neutrality</strong> violations occurring?</ListItem>
          <ListItem>Where has an <strong>internet blackout</strong> (total shutdown) occurred and how?</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={3} style={{paddingBottom: '40px'}}>
            What is <span style={{color: colors.palette.gray8}}>out of scope</span>
          </Heading>
          <List>
          <ListItem>Online censorship by social media companies</ListItem>
          <ListItem>Takedowns</ListItem>
          <ListItem>Self-censorship</ListItem>
          <ListItem>Fake news</ListItem>
          <ListItem>Sockpuppets (troll armies)</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <div style={{width: '400px', margin: '0 auto'}}>
          <Heading textColor="secondary" size={2} caps fit>
            What are
          </Heading>
          </div>
          <Image src={images.YouFinger} height={"400px"} />
          <div style={{width: '300px', margin: '0 auto'}}>
          <Heading textColor="primary" size={3} caps fit>
          Your
          </Heading>
          <Heading textColor="secondary" size={3} caps fit>
            questions?
          </Heading>
          </div>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading size={3} textColor="secondary">How to analyze OONI data</Heading>
          <Layout>
          <Fill>
          <Appear fid="1">
            <div>
            <Image src={images.Worker} height={"200px"} />
            <Heading size={4} textColor="primary">
              Excel
            </Heading>
            </div>
          </Appear>
          <Appear fid="2">
            <div>
            <Image src={images.Hipster} height={"200px"} />
            <Heading size={4} textColor="primary">
              Tableau
            </Heading>
            </div>
          </Appear>
          </Fill>
          <Fill>
          <Appear fid="3">
            <div>
            <Image src={images.Nerd} height={"200px"} />
            <Heading size={4} textColor="primary">
              Jupyter (python)
            </Heading>
            </div>
          </Appear>
          </Fill>
          </Layout>
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
              <Text>Allows researchers to conduct <b>independent studies</b> & to explore other research questions</Text>
              <Text>Allows the public to <b>verify</b> our findings</Text>
            </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIExplorerScreenshot}>
          <FloatingLink url='https://explorer.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIBlob}>
          <FloatingQuote>Big data is anything that won't fit in Excel</FloatingQuote>
        </Slide>

        <Slide transition={["fade"]} maxHeight="100vh" maxWidth="100vw" bgImage={images.OONIAPIScreenshot}>
          <FloatingLink url='https://api.ooni.io' />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
        <Heading>Links</Heading>
        <List>
        <ListItem><Link href="https://ooni.torproject.org/">https://ooni.torproject.org/</Link></ListItem>
        <ListItem><Link href="https://api.ooni.io/">https://api.ooni.io/</Link></ListItem>
        <ListItem><Link href="https://explorer.ooni.io/">https://explorer.ooni.io/</Link></ListItem>
        </List>
        </Slide>


        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary">OONI Data formats</Heading>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Image src={images.BaseDataFormat} height={"500px"} />
          <Text>https://github.com/TheTorProject/ooni-spec/blob/master/data-formats/df-000-base.md</Text>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={4}>What is an ASN?</Heading>
          <Image src={images.ASNMap1} height={"500px"} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={4}>What is an ASN?</Heading>
          <Image src={images.ASNMap2} height={"500px"} />
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={4}>WhatsApp</Heading>

          <Layout>
          <Fill style={{'text-align': 'left', marginRight: '40px'}}>
            <TestKey>whatsapp_endpoints_status</TestKey>
            <Text>"blocked" | "ok"</Text>
            <TestKey>whatsapp_endpoints_dns_inconsistent</TestKey>
            <Text>["a", "b"]</Text>
            <TestKey>registration_server_status</TestKey>
            <Text>"blocked" | "ok"</Text>
          </Fill>
          <Fill>
            <TestKey>whatsapp_web_status</TestKey>
            <Text>"blocked" | "ok"</Text>
            <TestKey>whatsapp_web_failure</TestKey>
            <Text>"ERROR STRING"</Text>
          </Fill>
          </Layout>

          <GithubLink>github.com/TheTorProject/ooni-spec/blob/master/test-specs/ts-018-whatsapp.md</GithubLink>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={4}>HTTP Invalid Request Line</Heading>

          <Layout>
          <Fill style={{'text-align': 'left', marginRight: '40px'}}>
            <TestKey>sent</TestKey>
            <Text>["a", "b"]</Text>
            <TestKey>tampering</TestKey>
            <Text>true | false</Text>
          </Fill>
          <Fill>
            <TestKey>received</TestKey>
            <Text>["a", "b"]</Text>
          </Fill>
          </Layout>

          <GithubLink>github.com/TheTorProject/ooni-spec/blob/master/test-specs/ts-007-http-invalid-request-line.md</GithubLink>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={4}>Web Connectivity</Heading>

          <Layout>
          <Fill style={{'text-align': 'left', marginRight: '40px'}}>
            <TestKey>body_length_match</TestKey>
            <Text>true | false | null</Text>
            <TestKey>headers_match</TestKey>
            <Text>true | false | null</Text>
            <TestKey>status_code_match</TestKey>
            <Text>true | false | null</Text>
            <TestKey>title_match</TestKey>
            <Text>true | false | null</Text>
          </Fill>
          <Fill>
            <TestKey>http_experiment_failure</TestKey>
            <Text>"FAILURE STRING"</Text>
            <TestKey>dns_experiment_failure</TestKey>
            <Text>"FAILURE STRING"</Text>
            <TestKey>control</TestKey>
            <Text>dns: OBJ, http_request: OBJ, tcp_connect: OBJ</Text>
          </Fill>
          </Layout>
        </Slide>

        <Slide transition={["fade"]} bgColor="white">
          <Heading textColor="secondary" size={4}>Web Connectivity</Heading>

          <Layout>
          <Fill style={{'text-align': 'left', marginRight: '40px'}}>
            <TestKey>dns_consistency</TestKey>
            <Text>"consistent" | "reverse_match" | "inconsistent"</Text>
          </Fill>
          <Fill>
            <TestKey>accessible</TestKey>
            <Text>true | false | null</Text>
            <TestKey>blocking</TestKey>
            <Text>"tcp_ip" | "dns" | "http-diff" | "http-failure" | null</Text>
          </Fill>
          </Layout>

          <GithubLink>https://github.com/TheTorProject/ooni-spec/blob/master/test-specs/ts-017-web-connectivity.md</GithubLink>
        </Slide>


        <Slide transition={["fade"]} bgColor="white">
        <Heading>Learn More</Heading>
        <List>
        <ListItem><Link href="https://ooni.torproject.org/">https://ooni.torproject.org/</Link></ListItem>
        <ListItem><Link href="https://api.ooni.io/">https://api.ooni.io/</Link></ListItem>
        <ListItem><Link href="https://explorer.ooni.io/">https://explorer.ooni.io/</Link></ListItem>

        <Heading size={4}>Contacts</Heading>
        <ListItem><Link>https://slack.openobservatory.org/</Link></ListItem>
        <ListItem><Link>contact@openobservatory.org</Link></ListItem>
        </List>
        </Slide>

      </Deck>
    );
  }
}
