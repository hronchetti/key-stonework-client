import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'

const SEO = ({ title, description, url }) => (
  <Helmet defer={false}>
    <html lang="en" />
    <title>{title} | Key Stonework Ltd</title>
    <meta property="og:title" content={title} />
    <meta name="twitter:title" content={title} />
    <meta name="description" content={description} />
    <meta property="og:description" content={description} />
    <meta name="twitter:description" content={description} />
    <meta property="og:image" content="" />
    <meta property="og:type" content="article" />
    <meta property="og:url" content={`https://keystonework.co.uk` + url} />
    <link rel="canonical" href={`https://keystonework.co.uk` + url} />
    <meta
      property="keywords"
      content="Key Stonework, Key Stonework Architectural Stone, Architectural Stonework, Stonework Manufacturers, Stonework Manufacturing, Bespoke Stonework, Installation Service, Stonework Solutions, Wet-cast Stonework, Dry-cast Stonework, Portland Stone, Bath Stone, Window Cills, Stone Window Cills, Keystones, Stone Corbels, Stone Strings, Stone Plinths, Quoins, Stone Balls, Collard Bases, Pier Caps, Wall Coping, Stone Wall Coping, Porticos, Balustrading, Balustrade Pier Caps, Gable Vents, Name Plaques"
    />
  </Helmet>
)

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SEO
