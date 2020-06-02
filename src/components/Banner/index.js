import React from 'react'
import Button from '../Button'
import TrackVisibility from 'react-on-screen'

const Banner = () => (
  <TrackVisibility partialVisibility once className="lightBackground">
    {({ isVisible }) => (
      <section className={`banner${isVisible ? ' active' : ''}`}>
        <h2>
          We have over 15 years experience in producing exceptional cast stone
        </h2>
        <Button
          additionalClasses="banner__button"
          buttonText="Contact us now"
          buttonURL="/contact"
        />
      </section>
    )}
  </TrackVisibility>
)

export default Banner
