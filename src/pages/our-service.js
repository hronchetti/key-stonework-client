import React from 'react'
import { graphql } from 'gatsby'

import ImageSection from '../components/ImageSection'
import TableSection from '../components/TableSection'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import TextLink from '../components/TextLink'

const OurService = ({ data }) => (
  <Layout
    lightBackground={false}
    headerTitle="Our service"
    headerSupportingText="Quality you can count on before and after installation"
  >
    <SEO
      title="Quality You Can Count on Before and After Installation"
      description="Our architectural cast stone is manufactured in Northamptonshire with expert precision moulds and is British Standard 1217:2008 compliant. All our products are available in bath or portland stone and dry or wet cast"
      url="/our-service"
    />
    <ImageSection
      rightToLeft={false}
      backgroundImage={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Placeholder.jpg' ? image : ''
        )[0].node.fluid
      }
      backgroundImageAlt=""
    >
      <h2>Our stone</h2>
      <p>
        Manufactured in Northamptonshire, our stone is made with expert
        precision moulds and is available in dry and wet cast.
      </p>
      <ul className="listBulletedTicks">
        <li>British Standard 1217:2008 compliant</li>
        <li>Available in 2 colours, portland or bath stone</li>
        <li>96 Standard products that have consistently shown great results</li>
        <li>
          Bespoke design for all products and entirely custom pieces available
        </li>
      </ul>
    </ImageSection>
    <ImageSection
      rightToLeft={true}
      backgroundImage={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Placeholder.jpg' ? image : ''
        )[0].node.fluid
      }
      backgroundImageAlt=""
    >
      <h2>Standards</h2>
      <p>
        For the last 15 years we have continued to produce dry and wet cast
        stone of exceptional quality. We assure our customers that every product
        we create (bespoke or standard) satisfies all British Standard 1217:2008
        requirements. This includes dimension tolerances, flatness of plane
        surface, permeability, durability and compressive strength.
      </p>
      <TextLink
        linkText="More about British Standard 1217:2008"
        linkPath="https://shop.bsigroup.com/ProductDetail/?pid=000000000030172628"
        external={true}
      />
    </ImageSection>
    <TableSection />
  </Layout>
)

export default OurService

export const pageQuery = graphql`
  query OurServiceImages {
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
