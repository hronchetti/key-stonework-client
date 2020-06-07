import React from 'react'
import PropTypes from 'prop-types'

const ButtonCircle = ({ onClick }) => (
  <button className="buttonCircle" onClick={onClick} aria-label="Close pop up">
    <span className="line" />
    <span className="line" />
  </button>
)

ButtonCircle.propTypes = {
  onClick: PropTypes.func.isRequired,
}

export default ButtonCircle
