import React from 'react'
import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'

const Header = ({ buttonText, buttonURL, supportingText, title }) => (
  <header>
    <TrackVisibility partialVisibility once className="wrapper">
      {({ isVisible }) => (
        <div className={`content animateFadeUp${isVisible && ' active'}`}>
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
      )}
    </TrackVisibility>
  </header>
)

Header.propTypes = {
  buttonText: PropTypes.string,
  buttonURL: PropTypes.string,
  supportingText: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Header
