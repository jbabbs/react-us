import React from 'react';
import PropTypes from 'prop-types';

const propTypes = {
  'aria-label': PropTypes.string,
  children: PropTypes.node,
  next: PropTypes.bool,
  previous: PropTypes.bool,
  first: PropTypes.bool,
  last: PropTypes.bool,
};

const defaultProps = {

};

const PaginationLink = (props) => {
  let {
    next,
    previous,
    first,
    last,
    ...attributes
  } = props

  let defaultAriaLabel
  if (previous) {
    defaultAriaLabel = 'Previous'
  } else if (next) {
    defaultAriaLabel = 'Next'
  } else if (first) {
    defaultAriaLabel = 'First'
  } else if (last) {
    defaultAriaLabel = 'Last'
  }

  const ariaLabel = props['aria-label'] || defaultAriaLabel

  let defaultCaret
  if (previous) {
    defaultCaret = '\u2039'
  } else if (next) {
    defaultCaret = '\u203A'
  } else if (first) {
    defaultCaret = '\u00ab'
  } else if (last) {
    defaultCaret = '\u00bb'
  }

  let children = props.children
  if (children && Array.isArray(children) && children.length === 0) {
    children = null
  }

  if (previous || next || first || last) {
    children = [
      <span aria-hidden='true' key='caret'>
        {children || defaultCaret}
      </span>,
      <span className='usa-sr-only'>
        {ariaLabel}
      </span>
    ]
  }

  return (
    <a
      {...attributes}
      aria-label={ariaLabel}
    >
      {children}
    </a>
  )
}

PaginationLink.propTypes = propTypes
PaginationLink.defaultProps = defaultProps

export default PaginationLink
