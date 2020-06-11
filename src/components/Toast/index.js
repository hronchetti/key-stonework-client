import React from 'react'
import PropTypes from 'prop-types'

import ButtonCircle from '../ButtonCircle'

const Toast = ({ handler, type, message, visible }) => (
  <div className={visible ? 'toast open' : 'toast'}>
    <div className="content">
      <span className={type ? 'icon success' : 'icon error'} />
      <div>
        <span className="heading">{type ? 'Success' : 'Error'}</span>
        <span className="message">{message}</span>
      </div>
    </div>
    <ButtonCircle onClick={handler} />
  </div>
)

Toast.propTypes = {
  handler: PropTypes.func,
  type: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  visible: PropTypes.bool.isRequired,
}

export default Toast
