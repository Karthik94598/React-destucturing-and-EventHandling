import React, { Component } from 'react'
class desc extends Component {
    
  render() {
    const {tech,media} = this.props
    return (
      <div>
        <h1>Hello {tech} Developer, Let's connect on {media}</h1>
      </div>
    )
  }
}

export default desc