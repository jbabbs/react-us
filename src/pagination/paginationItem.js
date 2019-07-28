import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  active: PropTypes.bool,
  children: PropTypes.node,
  disabled: PropTypes.bool
}

const defaultProps = {

}

const PaginationItem = (props) => {
  const {
    active,
    disabled,
    ...attributes
  } = props;

  return (
    <li {...attributes} />
  )
}

PaginationItem.propTypes = propTypes
PaginationItem.defaultProps = defaultProps

export default PaginationItem
