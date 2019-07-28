import React, { Component } from 'react'
import { Modal, Pagination, PaginationItem, PaginationLink, Dropdown, Collapse } from 'react-us'

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
        <Pagination aria-label="Page navigation example">
          <PaginationItem>
            <PaginationLink first href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink previous href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              2
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              3
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              4
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">
              5
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink next href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink last href="#" />
          </PaginationItem>
        </Pagination>
        <button className='usa-button' onClick={this.toggleCollapse}>
          { this.state.showCollapse ? 'Show Collapse' : 'Hide Collapse' }
        </button>
        <Collapse isOpen={this.state.showCollapse}>
          <pre><code>OH HI THERE</code></pre>
        </Collapse>
        <Dropdown />
      </div>
    )
  }
}
