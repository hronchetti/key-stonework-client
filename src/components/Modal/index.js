import React from 'react'
import Button from '../Button'
import ButtonCircle from '../ButtonCircle'
import PropTypes from 'prop-types'
import ScrollLock from 'react-scrolllock'

const Modal = ({ title, image, drawing, closeFunc }) => (
  <ScrollLock>
    <aside className="modal">
      <header className="header">
        <h3>{title}</h3>
        <ButtonCircle onClick={closeFunc} />
      </header>
      <section className="body">
        {drawing ? (
          <img
            src={require(`../../assets/img/technicalDrawings/${image}`)}
            alt={title}
          />
        ) : (
          <img src={image} alt={title} />
        )}
      </section>
      <footer className="footer">
        <Button
          buttonText="Close"
          additionalClasses="button--small button--secondary"
          onClick={closeFunc}
        />
      </footer>
    </aside>
    <div
      aria-label="Close pop-up"
      className="overlay"
      role="button"
      tabIndex={0}
      onClick={closeFunc}
      onKeyPress={(e) => (e.key === 'Enter' ? closeFunc() : null)}
    />
  </ScrollLock>
)

Modal.defaultProps = {
  drawing: true,
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  drawing: PropTypes.bool,
  image: PropTypes.string.isRequired,
  closeFunc: PropTypes.func.isRequired,
}

export default Modal
