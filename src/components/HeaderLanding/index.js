import React from 'react'
import TrackVisibility from 'react-on-screen'

import Pattern from '../../assets/img/pattern.svg'

const headerLanding = () => (
  <header className="headerLanding">
    <TrackVisibility partialVisibility once className="wrapper">
      {({ isVisible }) => (
        <>
          <div className={`content animateFadeUp${isVisible && ' active'}`}>
            <h1 className="h1">Architectural cast stone solutions</h1>
            <p className="p textWhite">We deliver to anywhere in the UK.</p>
            <a
              href={require('../../assets/pdfs/Brochure.pdf')}
              className="button"
              rel="noopener noreferrer"
              target="_blank"
            >
              View our brochure
            </a>
          </div>
          <section className="right">
            <img className="pattern" src={Pattern} alt="Aesthetic pattern" />
            <div
              className={`image${isVisible && ' active'}`}
              style={{
                backgroundImage: `url(${require('../../assets/img/Key-Stonework-project.jpg')})`,
              }}
            />
            <img className="pattern" src={Pattern} alt="Aesthetic pattern" />
          </section>
        </>
      )}
    </TrackVisibility>
  </header>
)

export default headerLanding
