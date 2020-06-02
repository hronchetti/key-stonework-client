import React from 'react'
import PropTypes from 'prop-types'

const Toast = ({ handler, type, message, visible }) => (
  <div className={visible ? 'toast open' : 'toast'}>
    <div className="content">
      <span className={type ? 'icon success' : 'icon error'} />
      <div>
        <span className="heading">{type ? 'Success' : 'Error'}</span>
        <span className="message">{message}</span>
      </div>
    </div>
    <button className="close" onClick={handler} aria-label="Close pop up">
      <span className="close__line" />
      <span className="close__line" />
    </button>
  </div>
)

Toast.propTypes = {
  handler: PropTypes.func,
  type: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Toast
