import React from 'react'
import PropTypes from 'prop-types'

const desf=(props)=> {
  const {tech,media}= props
  return (
    <div>
        <h1>Hello {tech} Developer , let's connect on {media}</h1>
    </div>
  )
}
desf.propTypes = {}

export default desf
