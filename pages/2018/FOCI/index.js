import React from "react"
import PropTypes from "prop-types"
import { AppContainer } from "react-hot-loader"
import Redbox from "redbox-react"
import NoSSR from 'react-no-ssr'

const CustomErrorReporter = ({ error }) => <Redbox error={ error } />;

CustomErrorReporter.propTypes = {
  error: PropTypes.instanceOf(Error).isRequired
};

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
