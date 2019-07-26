/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './style.css'

export class Modal extends Component {
  static propTypes = {
    handleClose: PropTypes.fn,
    show: PropTypes.bool,
    children: PropTypes.element.isRequired
  };

  render() {
    const { handleClose, show, children } = this.props
    const showHideClassName = show ? 'us-modal display-block' : 'modal display-none'

    return (
      <div className={showHideClassName}>
        <section className='us-modal__main'>
          {children}
          <button onClick={handleClose}>close</button>
        </section>
      </div>
    )
  }
}
