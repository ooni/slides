import React from "react"
import PropTypes from "prop-types"
import NoSSR from 'react-no-ssr'

const PresentationWrapper = () => {
  const Presentation = require('./presentation').default
  return (
    <Presentation />
  )
}

export default () => (
  <NoSSR>
    <PresentationWrapper />
  </NoSSR>
)
