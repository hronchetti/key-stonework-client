import React from 'react'
import PropTypes from 'prop-types'

const ButtonWithLoader = ({ type, children, secondary, ...props }) => (
  <button
    className={`button buttonWithLoader__loader${
      secondary ? ' button--secondary' : ''
    }`}
    type={type}
    {...props}
  >
    <span className="buttonWithLoader__text">{children}</span>
  </button>
)

ButtonWithLoader.defaultProps = {
  type: 'button',
  secondary: false,
}

ButtonWithLoader.propTypes = {
  children: PropTypes.node.isRequired,
  secondary: PropTypes.bool,
  type: PropTypes.oneOf(['button', 'submit']),
}

export default ButtonWithLoader
