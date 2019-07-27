/**
 * @class ExampleComponent
 */

import React, { Component } from 'react'
import PropTypes from "prop-types";

export class Collapse extends Component {
  static propTypes = {
    isOpen: PropTypes.bool,
    children: PropTypes.element.isRequired
  };

  render() {
    const { isOpen, children } = this.props;
    return (
      <div style={ isOpen ? { display: 'block' } : { display: 'none' } }>
        {children}
      </div>
    )
  }
}
