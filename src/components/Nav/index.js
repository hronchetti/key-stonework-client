import React, { useEffect, useState } from 'react'
import { Link } from 'gatsby'
import Logo from '../../assets/img/Key-Stonework-logo-x32.svg'

const Nav = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [navFixed, setNavFixed] = useState(false)
  const [productsShown, setProductsShown] = useState(false)

  const toggleMobileNav = () => {
    setMobileNavOpen(!mobileNavOpen)
    setProductsShown(false)
  }

  const toggleProducts = () => {
    setProductsShown(!productsShown)
    setNavFixed(true)
  }

  const closeAllNavElements = () => {
    setMobileNavOpen(false)
    setNavFixed(false)
    setProductsShown(false)
  }

  useEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset > 500) {
        setNavFixed(true)
      } else if ((navFixed && window.pageYOffset < 500) || mobileNavOpen) {
        /* Nav already fixed OR page below 500px scroll */
        closeAllNavElements()
      }
    }
  })
  return (
    <section
      className={`nav${mobileNavOpen ? ' nav--active' : ''}${
        navFixed ? ' nav--fixed' : ''
      }`}
    >
      <Link className="nav__logo" to="/">
        <img className="nav__logoIcon" src={Logo} alt="Key Stonework Logo" />
        <span className="nav__logoText">Key Stonework Ltd</span>
      </Link>
      <nav className="nav__links">
        <ul>
          <li className="nav__item">
            <Link className="nav__itemLink" to="/our-service">
              Our service
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__itemLink" to="/latest-projects">
              Latest projects
            </Link>
          </li>
          <li className="nav__item">
            <span
              role="button"
              className="nav__productsControl"
              onClick={toggleProducts}
              aria-label="Toggle product list drop down"
              onKeyDown={e => e.keyCode === 13 && toggleProducts}
              tabIndex="0"
            >
              <span className="nav__itemLink">Products</span>
              <span
                className={`icon-chevron nav__productsControl__icon${
                  productsShown ? ' nav__productsControl__icon--active' : ''
                }`}
              />
            </span>
            <div
              className={`nav__products${
                productsShown ? ' nav__products--active' : ''
              }`}
            >
              <span className="nav__productsHeading">Our products</span>
              <div>
                <span style={{ order: 1 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/architectural-pieces"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Architectural pieces
                  </Link>
                </span>
                <span style={{ order: 5 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/balls-and-bases"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Balls &amp; bases
                  </Link>
                </span>
                <span style={{ order: 9 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/balustrading"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Balustrading
                  </Link>
                </span>
                <span style={{ order: 2 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/corbels"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Corbels
                  </Link>
                </span>
                <span style={{ order: 6 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/keystones"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Keystones
                  </Link>
                </span>
                <span style={{ order: 10 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/pier-caps"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Pier caps
                  </Link>
                </span>
                <span style={{ order: 3 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/porticos"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Porticos
                  </Link>
                </span>
                <span style={{ order: 7 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/quions"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Quions
                  </Link>
                </span>
                <span style={{ order: 11 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/strings-and-plinths"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Strings &amp; plinths
                  </Link>
                </span>
                <span style={{ order: 4 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/wall-coping"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Wall coping
                  </Link>
                </span>
                <span style={{ order: 8 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/window-cills-and-heads"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Window cills &amp; heads
                  </Link>
                </span>
                <span style={{ order: 12 }}>
                  <Link
                    className="nav__itemLink"
                    to="/products/window-surrounds"
                    tabIndex={productsShown ? 0 : -1}
                  >
                    Window surrounds
                  </Link>
                </span>
              </div>
            </div>
          </li>
          <li className="nav__item">
            <Link className="nav__itemLink" to="/installation-info">
              Installation info
            </Link>
          </li>
          <li className="nav__item">
            <Link className="nav__itemLink" to="/contact">
              Contact
            </Link>
          </li>
          <li className="nav__item">
            <a
              className="nav__itemSocialLink icon-twitter"
              rel="noopener noreferrer"
              target="_blank"
              href="https://twitter.com/KeyStonework"
            >
              <span className="hiddenText">Key Stonework Twitter</span>
            </a>
            <a
              className="nav__itemSocialLink icon-facebook"
              rel="noopener noreferrer"
              target="_blank"
              href="https://www.facebook.com/Key-Stonework-Ltd-231196030337640/"
            >
              <span className="hiddenText">Key Stonework Facebook</span>
            </a>
          </li>
        </ul>
      </nav>
      <button
        className={
          mobileNavOpen
            ? 'nav__mobileMenu nav__mobileMenu--open'
            : 'nav__mobileMenu'
        }
        onClick={toggleMobileNav}
        aria-label="Toggle mobile navigation menu"
      >
        <span className="nav__mobileMenu__line" />
        <span className="nav__mobileMenu__line" />
        <span className="nav__mobileMenu__line" />
      </button>
    </section>
  )
}

export default Nav
