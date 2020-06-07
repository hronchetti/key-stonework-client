import React from 'react'
import PropTypes from 'prop-types'

const Header = ({ buttonText, buttonURL, supportingText, title }) => (
  <header>
    <section className="wrapper">
      <div className="content">
        <h1>{title}</h1>
        <p
          className="textWhite"
          dangerouslySetInnerHTML={{ __html: supportingText }}
        />
        {buttonText && buttonURL && (
          <a
            href={buttonURL}
            className="button"
            target="_blank"
            rel="noopener noreferrer"
          >
            {buttonText}
          </a>
        )}
      </div>
    </section>
  </header>
)

Header.propTypes = {
  buttonText: PropTypes.string,
  buttonURL: PropTypes.string,
  supportingText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Header
