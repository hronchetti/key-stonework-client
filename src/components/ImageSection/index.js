import React from 'react'
import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'
import Img from 'gatsby-image'

const ImageSection = ({ backgroundImageName, children, rightToLeft }) => (
  <TrackVisibility partialVisibility once className="wrapper--noPadding">
    {({ isVisible }) => (
      <>
        <Img
          className={`imageSection__image ${
            rightToLeft ? 'imageSection__image--imageRight' : ''
          }`}
          fluid={backgroundImageName}
          alt="Test"
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
  backgroundImageName: PropTypes.object.isRequired,
  children: PropTypes.node.isRequired,
  rightToLeft: PropTypes.bool.isRequired,
}

export default ImageSection
