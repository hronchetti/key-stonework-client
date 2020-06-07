import React from 'react'
import PropTypes from 'prop-types'
import '../../style/main.scss'

import Footer from '../Footer'
import HeaderLanding from '../HeaderLanding'
import HeaderNormal from '../Header'
import Nav from '../Nav'

const Layout = ({
  headerLanding,
  headerButtonURL,
  headerButtonText,
  headerSupportingText,
  headerTitle,
  lightBackground,
  children,
}) => (
  <>
    <Nav />
    {headerLanding ? (
      <HeaderLanding />
    ) : (
      <HeaderNormal
        buttonText={headerButtonText}
        supportingText={headerSupportingText}
        title={headerTitle}
        buttonURL={headerButtonURL}
      />
    )}
    <main className={lightBackground ? 'lightBackground' : ''}>{children}</main>
    <Footer />
  </>
)

Layout.defaultProps = {
  headerLanding: false,
  lightBackground: true,
  metaDescription: '',
  metaTitle: '',
}

Layout.propTypes = {
  headerLanding: PropTypes.bool,
  lightBackground: PropTypes.bool,
  metaDescription: PropTypes.string,
  metaTitle: PropTypes.string,
}

export default Layout
