import React, { Component } from 'react'
import { Modal, Pagination, Dropdown, Collapse } from 'react-us'

export default class App extends Component {
  state = {
      showModal: false,
      showCollapse: false,
  };

  showModal = () => {
    this.setState({ showModal: true })
  };

  hideModal = () => {
    this.setState({ showModal: false })
  };

  toggleCollapse = () => {
    this.setState( { showCollapse: !this.state.showCollapse });
  };

  render () {
    return (
      <div>
        <button className='usa-button' onClick={this.showModal}>ToggleModal</button>
        <Modal show={this.state.showModal} handleClose={this.hideModal}>
          Inside of modal goes here
        </Modal>
        <Pagination />
        <button className='usa-button' onClick={this.toggleCollapse}>
            { this.state.showCollapse ? 'Show Collapse' : 'Hide Collapse' }
        </button>
          <Collapse isOpen={this.state.showCollapse}>
            <pre><code>OH HI THERE</code></pre>
          </Collapse>
        <Dropdown/>
      </div>
    )
  }
}
