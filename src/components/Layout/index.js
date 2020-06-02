import React from 'react'
import '../../style/main.scss'
import Footer from '../Footer'
import HeaderLanding from '../HeaderLanding'
import HeaderNormal from '../Header'
import Nav from '../Nav'
import PropTypes from 'prop-types'

const Layout = ({
  headerLanding,
  headerButtonURL,
  headerButtonText,
  headerSupportingText,
  headerTitle,
  lightBackground,
  children,
}) => (
  <React.Fragment>
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
  </React.Fragment>
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
