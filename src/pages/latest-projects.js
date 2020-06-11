import React from 'react'

import ProductPageList from '../components/ProductPageList'
import LatestProjectsFeed from '../components/LatestProjectsFeed'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const LatestProjects = () => (
  <Layout
    lightBackground={true}
    headerTitle="Latest projects"
    headerSupportingText="Browse photos from some of our latest installations"
  >
    <SEO
      title="Latest Projects | Cast Stone | Architectural Stone"
      description="Browse photos from some of our latest installations and the products used in each project before getting in contact. Call us now on 01327 842585"
      url="/latest-projects"
    />
    <section className="wrapper product">
      <ProductPageList />
      <LatestProjectsFeed />
    </section>
  </Layout>
)

export default LatestProjects
