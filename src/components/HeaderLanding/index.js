import React from 'react'
import TrackVisibility from 'react-on-screen'
import zenscroll from 'zenscroll'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

import Pattern from '../../assets/img/pattern.svg'

const headerLanding = () => (
  <StaticQuery
    query={graphql`
      query HomepageHeaderImage {
        imageSharp(
          fluid: { originalName: { eq: "Key-Stonework-project.jpg" } }
        ) {
          fluid(maxWidth: 1280) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    `}
    render={(data) => (
      <header className="headerLanding">
        <TrackVisibility partialVisibility once className="wrapper">
          {({ isVisible }) => (
            <>
              <div className={`content animateFadeUp${isVisible && ' active'}`}>
                <h1 className="h1">Architectural cast stone solutions</h1>
                <p className="p textWhite">We deliver to anywhere in the UK.</p>
                <button
                  onClick={() =>
                    zenscroll.to(
                      document.getElementsByClassName('productList--full')[0]
                    )
                  }
                  className="button"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Our products
                </button>
              </div>
              <section className="right">
                <img
                  className="pattern"
                  src={Pattern}
                  alt="Aesthetic pattern"
                />
                <Img
                  className={`image${isVisible && ' active'}`}
                  fluid={data.imageSharp.fluid}
                  alt="Key Stonework portico and quions bath stone installation"
                  title="Key Stonework portico and quions bath stone installation"
                />
                <img
                  className="pattern"
                  src={Pattern}
                  alt="Aesthetic pattern"
                />
              </section>
            </>
          )}
        </TrackVisibility>
      </header>
    )}
  />
)

export default headerLanding
