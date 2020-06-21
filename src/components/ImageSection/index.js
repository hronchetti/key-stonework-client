import React from 'react'
import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'
import Img from 'gatsby-image'

const ImageSection = ({
  backgroundImage,
  backgroundImageAlt,
  children,
  rightToLeft,
}) => (
  <TrackVisibility partialVisibility once className="wrapper--noPadding">
    {({ isVisible }) => (
      <>
        <Img
          className={`imageSection__image ${
            rightToLeft ? 'imageSection__image--imageRight' : ''
          }`}
          fluid={backgroundImage}
          alt={backgroundImageAlt}
          title={backgroundImageAlt}
        />
        <article
          className={`imageSection__content animateFadeUp${
            rightToLeft ? ' imageSection__content--imageRight' : ''
          }${isVisible ? ' active' : ''}`}
        >
          {children}
        </article>
      </>
    )}
  </TrackVisibility>
)

ImageSection.propTypes = {
  backgroundImage: PropTypes.object.isRequired,
  backgroundImageAlt: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  rightToLeft: PropTypes.bool.isRequired,
}

export default ImageSection
