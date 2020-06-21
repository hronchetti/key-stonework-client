import React from 'react'
import Layout from '../components/Layout'

const NoMatch = () => {
  return (
    <Layout
      headerLanding={false}
      headerButtonText={'Return to homepage'}
      headerSupportingText={
        'Sorry, the page you&#39;re looking for cannot be found or no longer exists'
      }
      headerTitle={'404 Page not found'}
      headerButtonURL={'/'}
    ></Layout>
  )
}

export default NoMatch
