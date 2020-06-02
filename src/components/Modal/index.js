import React from 'react'
import Button from '../Button'
import ButtonCircle from '../ButtonCircle'
import PropTypes from 'prop-types'
import ScrollLock from 'react-scrolllock'

const Modal = ({ title, image, closeFunc }) => (
  <ScrollLock>
    <div className="overlay">
      <aside className="modal">
        <header className="header">
          <h3>{title}</h3>
          <ButtonCircle onClick={closeFunc} />
        </header>
        <section className="body">
          <img
            src={require(`../../assets/img/technicalDrawings/${image}`)}
            alt={title}
          />
        </section>
        <footer className="footer">
          <Button
            buttonText="Close"
            additionalClasses="button--small button--secondary"
            onClick={closeFunc}
          />
        </footer>
      </aside>
    </div>
  </ScrollLock>
)

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  closeFunc: PropTypes.func.isRequired,
}

export default Modal
