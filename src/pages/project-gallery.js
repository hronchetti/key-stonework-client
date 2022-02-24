import React from 'react'

import ProductPageList from '../components/ProductPageList'
import LatestProjectsFeed from '../components/LatestProjectsFeed'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const LatestProjects = () => (
  <Layout
    lightBackground={true}
    headerTitle="Project gallery"
    headerSupportingText="Browse photos of our installations"
  >
    <SEO
      title="Our Latest Installations"
      description="Browse photos from some of our latest installations and the products used in each project. Do you want more information about our architectural cast stone products? Do you have complicated bespoke installation requirements you'd like to discuss? Get in contact now by calling 01604 592 949 or using our online form"
      url="/project-gallery"
    />
    <section className="wrapper product">
      <ProductPageList />
      <LatestProjectsFeed />
    </section>
  </Layout>
)

export default LatestProjects
