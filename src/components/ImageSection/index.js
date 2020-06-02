import React from 'react'
import PropTypes from 'prop-types'
import TextLink from '../TextLink'
import TrackVisibility from 'react-on-screen'

const ImageSection = ({
  backgroundImageName,
  content,
  heading,
  illustration,
  illustrationAlt,
  linkExternal,
  linkOnClick,
  linkPath,
  linkText,
  list,
  rightToLeft,
}) => {
  const ImageBackground = {
    backgroundImage: `url(${require('../../assets/img/' +
      backgroundImageName)})`,
  }

  // Illustration handle
  let illustrationContent = ''

  if (illustration) {
    illustrationContent = (
      <img
        className="illustration"
        src={require('../../assets/img/illustrations/' + illustration)}
        alt={illustrationAlt + ' illustration'}
      />
    )
  }

  // TextLink handle
  let textLinkContent

  if (linkText && linkPath) {
    if (linkExternal) {
      textLinkContent = (
        <TextLink linkText={linkText} linkPath={linkPath} external={true} />
      )
    } else {
      textLinkContent = <TextLink linkText={linkText} linkPath={linkPath} />
    }
  } else if (linkText && linkOnClick) {
    textLinkContent = <TextLink linkText={linkText} onClick={linkOnClick} />
  }

  // List handle
  let listElement

  if (list === 'bulletedDisc') {
    listElement = (
      <ul className="listBulleted">
        <li>Pallets should be stored on flat ground and not double stacked</li>
        <li>
          Outer wrapping should not be removed until the products are ready to
          install
        </li>
        <li>
          After installation stonework should be protected against damage from
          other on-site work
        </li>
      </ul>
    )
  }

  if (list === 'bulletedTicks') {
    listElement = (
      <ul className="listBulletedTicks">
        <li>British Standard 1217:2008 compliant</li>
        <li>Available in 2 colours, portland or bath stone</li>
        <li>96 Standard products that have consistently shown great results</li>
        <li>
          Bespoke design for all products and entirely custom pieces available
        </li>
      </ul>
    )
  }

  return (
    <TrackVisibility partialVisibility once className="wrapper--noPadding">
      {({ isVisible }) => (
        <>
          <section
            className={`imageSection__image ${
              rightToLeft ? 'imageSection__image--imageRight' : ''
            }`}
            style={ImageBackground}
          />

          <article
            className={`imageSection__content${
              rightToLeft ? ' imageSection__content--imageRight' : ''
            }${isVisible ? ' active' : ''}`}
          >
            {illustrationContent}
            <h2>{heading}</h2>
            <p dangerouslySetInnerHTML={{ __html: content }} />
            {listElement}
            {textLinkContent}
          </article>
        </>
      )}
    </TrackVisibility>
  )
}

ImageSection.propTypes = {
  backgroundImageName: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  illustration: PropTypes.string,
  illustrationAlt: PropTypes.string,
  linkExternal: PropTypes.bool,
  linkPath: PropTypes.string,
  linkText: PropTypes.string,
  list: PropTypes.string,
  rightToLeft: PropTypes.bool.isRequired,
}

export default ImageSection
