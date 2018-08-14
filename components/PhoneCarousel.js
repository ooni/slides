import React from 'react'
import styled from 'styled-components'

import {
  Flex, Box
} from 'ooni-components'

import {
  Layout,
  Fill,
  Image,
  Heading,
  Text
} from 'spectacle'

import FaApple from 'react-icons/lib/fa/apple'
import FaAndroid from 'react-icons/lib/fa/android'
import MdLaptop from 'react-icons/lib/md/laptop'
import MdChatBubble from 'react-icons/lib/md/chat-bubble'

const PhoneContainer = styled(Fill)`
  position: relative;
  perspective: 500px;
  opacity: ${props => props.active ? '1' : '0.7'};
  transition: opacity 3s;
`

const Screenshot = styled.div`
  position: absolute;
  top: 60px;
  left: 15px;
  img {
    width: 275px;
    margin: 0;
  }
`
const PhoneAndScreenshot = styled.div`
  ${props => {
    if (props.active) {
      return 'transform: translateZ(0);';
    }
    return 'transform: translateZ(-200px);';
  }};
  transition: transform 3s;
`

const Nexus5 = require('../assets/Nexus5.svg')

const ProbeHorizontalColor = require("ooni-components/components/svgs/logos/Probe-HorizontalColor.svg")

const ProbeIconsContainer = styled.div`
  width: 100%;
  position: absolute;
  top: -30px;
  text-align: center;
  z-index: 9999;
`

const ProbePlatformsContainer = styled.div`
  position: absolute;
  bottom: 0px;
  z-index: 9999;
  background-color: rgba(255, 255, 255, 0.7);
  width: 100vw;
`

const ProbeIcons = () => (
  <div>
    <ProbeIconsContainer>
      <Image src={ProbeHorizontalColor} width='400px' />
    </ProbeIconsContainer>
    <ProbePlatformsContainer>
      <Flex>
      <Box pr={3} pl={2}>
      <Text>
      Runs on:
      </Text>
      </Box>
      <Box>
      <Text>
        <FaApple size={40} style={{paddingRight: '10px'}}/>
      iOS</Text>
      </Box>
      <Box pl={2}>
      <Text>
        <FaAndroid size={40} style={{paddingRight: '10px'}}/>
      Android</Text>
      </Box>
      <Box pl={2}>
      <Text>
        <MdLaptop size={40} style={{paddingRight: '10px'}}/>
      macOS, Linux</Text>
      </Box>
      </Flex>
    </ProbePlatformsContainer>
  </div>
)
export default class PhoneCarousel extends React.Component {
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
      screenshots,
      withIcons
    } = this.props

    return (
      <Layout>
        {withIcons && <ProbeIcons />}
        {[0,1,2].map(idx => {
          return (
            <PhoneContainer active={idx == activeIdx}>
              <PhoneAndScreenshot active={idx == activeIdx}>
                <Screenshot>
                  <Image src={screenshots[idx]} width="275px" />
                </Screenshot>
                <Image src={Nexus5} width="300px" />
              </PhoneAndScreenshot>
            </PhoneContainer>
          )
        })}
      </Layout>
    )
  }
}
