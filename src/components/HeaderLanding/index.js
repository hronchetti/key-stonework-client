import React from 'react'
import Pattern from '../../assets/img/pattern.svg'

const headerLanding = () => (
  <header className="headerLanding">
    <section className="wrapper">
      <div className="header__content">
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
      <section className="headerLanding__right">
        <img
          className="headerLanding__pattern"
          src={Pattern}
          alt="Aesthetic pattern"
        />
        <div
          className="headerLanding__image"
          style={{
            backgroundImage: `url(${require('../../assets/img/Key-Stonework-project.jpg')})`,
          }}
        />
        <img
          className="headerLanding__pattern"
          src={Pattern}
          alt="Aesthetic pattern"
        />
      </section>
    </section>
  </header>
)

export default headerLanding
