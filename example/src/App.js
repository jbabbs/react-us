import React, { Component } from 'react'

import ExampleComponent from 'react-us'

export default class App extends Component {
  render () {
    return (
      <div>
        <ExampleComponent text='Modern React component module' />
        <button class='usa-button usa-button--big'>USA-BUTTON</button>
      </div>
    )
  }
}
