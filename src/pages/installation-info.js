import React from 'react'
import { graphql } from 'gatsby'

import ImageSection from '../components/ImageSection'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

const InstallationInfo = ({ data }) => (
  <Layout
    lightBackground={false}
    headerTitle="Installation info"
    headerSupportingText="How to work with and store our products"
  >
    <SEO
      title="Using and Storing Key Stonework Ltd Products"
      description="Read our expert advice on how to store and use dry/wet cast stone products for the best results. For further questions or product enquiries get in contact on 01604 592 949 or by emailing info@keystonework.co.uk"
      url="/installation-info"
    />
    <ImageSection
      rightToLeft={false}
      backgroundImage={data.handlingAndStorage.fluid}
      backgroundImageAlt="Handling Cast Stone"
    >
      <h2>Handling &amp; storage</h2>
      <p>
        Key Stonework cast stone is supplied on pallets banded and wrapped for
        ease of handling. For the best results, these guidelines should be
        followed when moving Key Stonework cast stone:
      </p>
      <ul className="listBulleted">
        <li>Pallets should be stored on flat ground and not double stacked</li>
        <li>
          Outer wrapping should not be removed until the products are ready to
          install
        </li>
        <li>
          After installation stonework should be protected against damage from
          other on-site work
        </li>
      </ul>
    </ImageSection>
    <ImageSection
      rightToLeft={true}
      backgroundImage={data.mortarRecommendation.fluid}
      backgroundImageAlt="Cast Stone Mortar Recommendations"
    >
      <h2>Mortar recommendations</h2>
      <p>
        Masonry cement and plasticised cement mortars are suitable for use with
        our cast stone. Mortars containing lime are highly recommended as they
        have a lower permeability are give greater resistance to rain
        penetration. <br />
        <br />
        Mortars must be able to resist frost and develop durability quickly.
        However, unnecessarily strong mortars should be avoided as they
        concentrate the effect of any differential movement.
      </p>
    </ImageSection>
    <Banner />
  </Layout>
)

export default InstallationInfo

export const pageQuery = graphql`
  query InstallationInfoImages {
    mortarRecommendation: imageSharp(
      fluid: {
        originalName: { eq: "mortar-recommendations-for-cast-stone.jpeg" }
      }
    ) {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
    handlingAndStorage: imageSharp(
      fluid: { originalName: { eq: "handling-and-storage-of-cast-stone.jpeg" } }
    ) {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
