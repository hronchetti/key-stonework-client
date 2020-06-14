import React from 'react'
import { Helmet } from 'react-helmet'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

const SEO = ({ title, description, url }) => (
  <StaticQuery
    query={graphql`
      query siteURLQuery {
        site {
          siteMetadata {
            siteUrl
          }
        }
      }
    `}
    render={({ site }) => (
      <Helmet defer={false}>
        <html lang="en" />
        <title>{title} | Key Stonework</title>
        <meta property="og:title" content={title} />
        <meta name="twitter:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta name="twitter:description" content={description} />
        <meta property="og:image" content="" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content={site.siteMetadata.siteUrl + url} />
        <link rel="canonical" href={site.siteMetadata.siteUrl + url} />
        <meta
          property="keywords"
          content="Key Stonework, Key Stonework Architectural Stone, Architectural Stonework, Stonework Manufacturers, Stonework Manufacturing, Bespoke Stonework, Installation Service, Stonework Solutions, Wet-cast Stonework, Dry-cast Stonework, Portland Stone, Bath Stone, Window Cills, Stone Window Cills, Keystones, Stone Corbels, Stone Strings, Stone Plinths, Quoins, Stone Balls, Collard Bases, Pier Caps, Wall Coping, Stone Wall Coping, Porticos, Balustrading, Balustrade Pier Caps, Gable Vents, Name Plaques"
        />
      </Helmet>
    )}
  />
)

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default SEO
