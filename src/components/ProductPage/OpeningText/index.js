import React from 'react'
import PropTypes from 'prop-types'

OpeningText.propTypes = {
  openingText: PropTypes.string.isRequired,
  openingTitle: PropTypes.string,
}

export default function OpeningText(props) {
  const { openingText, openingTitle } = props

  return (
    <article className="openingText">
      <h2>{openingTitle}</h2>
      <p dangerouslySetInnerHTML={{ __html: openingText }} />
    </article>
  )
}
