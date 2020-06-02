import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'

const Button = ({
  additionalClasses,
  buttonText,
  buttonURL,
  onClick,
  ...props
}) => {
  return buttonURL ? (
    <Link
      className={`button${additionalClasses ? ' ' + additionalClasses : ''}`}
      to={buttonURL}
      {...props}
    >
      {buttonText}
    </Link>
  ) : (
    <button
      onClick={onClick}
      className={`button${additionalClasses ? ' ' + additionalClasses : ''}`}
      {...props}
    >
      {buttonText}
    </button>
  )
}

Button.propTypes = {
  additionalClasses: PropTypes.string,
  buttonText: PropTypes.string.isRequired,
  buttonURL: PropTypes.string,
  onClick: PropTypes.func,
}

export default Button
