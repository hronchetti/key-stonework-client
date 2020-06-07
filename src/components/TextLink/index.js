import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const TextLink = ({ external, linkText, linkPath, onClick }) => {
  return external ? (
    <a
      className="textLink"
      href={linkPath}
      target="_blank"
      rel="noopener noreferrer"
    >
      {linkText}
    </a>
  ) : onClick ? (
    <button className="textLink" onClick={onClick}>
      {linkText}
    </button>
  ) : (
    <Link className="textLink" to={linkPath}>
      {linkText}
    </Link>
  )
}

TextLink.propsTypes = {
  external: PropTypes.bool,
  linkPath: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  onClick: PropTypes.func,
}

export default TextLink
