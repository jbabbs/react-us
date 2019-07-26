import React, { Component } from 'react'
import { Modal, Pagination, Card, Dropdown } from 'react-us'

export default class App extends Component {
  state = { show: false };

  showModal = () => {
    this.setState({ show: true })
  };

  hideModal = () => {
    this.setState({ show: false })
  };

  render () {
    return (
      <div>
        <button type='button' className='usa-button' onClick={this.showModal}>ToggleModal</button>
        <Modal show={this.state.show} handleClose={this.hideModal}>
          Inside of modal goes here
        </Modal>
        <Pagination />
        <Card />
        <Dropdown/>
      </div>
    )
  }
}
