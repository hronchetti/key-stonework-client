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
      title="Installation Info | Cast Stone | Architectural Stone"
      description="Read our expert advice on how to store and use dry/wet cast stone products. For further questions or product enquiries get in contact on 01327 842585 or by emailing gary@keystonework.co.uk"
      url="/installation-info"
    />
    <ImageSection
      rightToLeft={false}
      backgroundImageName={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Placeholder.jpg' ? image : ''
        )[0].node.fluid
      }
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
      backgroundImageName={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Placeholder.jpg' ? image : ''
        )[0].node.fluid
      }
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
    allImageSharp {
      edges {
        node {
          fluid(maxWidth: 1280) {
            aspectRatio
            base64
            sizes
            src
            srcSet
            originalName
          }
        }
      }
    }
  }
`
