import React, { Component } from 'react'
import { Consumer } from './MyContext'

export default class Guest extends Component {
  render() {
    return (
      <Consumer>
        {({ data, handleChange }) =>
        (
          <div>
            <h3>Name:{data.name}</h3>
            <h2>Value:{data.value}</h2>
            <button onClick={handleChange}>Click Me</button>
          </div>
        )
        }
      </Consumer>
    )
  }
}
