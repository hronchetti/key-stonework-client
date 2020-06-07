import React from 'react'
import Helmet from 'react-helmet'

import SEO from '../components/SEO'
import '../style/main.scss'
import ProjectBuilder from '../components/ProjectBuilder'

const Admin = () => (
  <>
    <Helmet>
      <meta name="robots" content="none" />
      <meta name="googlebot" content="none" />
    </Helmet>
    <SEO
      title="Admin login"
      description="Adding new projects to the Latest Projects feed"
      url="/admin"
    />
    <ProjectBuilder />
  </>
)

export default Admin
