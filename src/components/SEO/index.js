import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = ({ title, description, image, follow }) => (
  <Helmet defer={false}>
    <title>{title} | Key Stonework</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />

    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    {image ? <meta property="og:image" content={image} /> : null}
    <meta name="twitter:creator" content="keystonework" />
    <meta property="og:type" content="article" />
    <meta
      property="keywords"
      content="Key Stonework, Key Stonework Architectural Stone, Architectural Stonework, Stonework Manufacturers, Stonework Manufacturing, Bespoke Stonework, Installation Service, Stonework Solutions, Wet-cast Stonework, Dry-cast Stonework, Portland Stone, Bath Stone, Window Cills, Stone Window Cills, Keystones, Stone Corbels, Stone Strings, Stone Plinths, Quoins, Stone Balls, Collard Bases, Pier Caps, Wall Coping, Stone Wall Coping, Porticos, Balustrading, Balustrade Pier Caps, Gable Vents, Name Plaques"
    />
    <meta
      property="robots"
      content={follow !== 'noFollow' ? 'index, follow' : 'noindex, nofollow'}
    />
  </Helmet>
)

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
}

SEO.defaultProps = {
  title: '',
  description: '',
  image: '',
}

export default SEO
