import React from 'react'
import PropTypes from 'prop-types'

import './style.css';

const propTypes = {
  children: PropTypes.node,
  'aria-label': PropTypes.string
}

const defaultProps = {
  'aria-label': 'pagination'
}

const Pagination = (props) => {
  const {
    'aria-label': label,
    ...attributes
  } = props

  return (
    <nav aria-label={label}>
      <ul {...attributes} />
    </nav>
  )
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination
