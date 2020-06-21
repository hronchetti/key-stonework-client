import React from 'react'

import { graphql } from 'gatsby'

import Layout from '../components/Layout'
import ImageSection from '../components/ImageSection'
import ProductListFull from '../components/ProductListFull/ProductListFull'
import SEO from '../components/SEO'
import TextLink from '../components/TextLink'

import PencilRuleIllustration from '../assets/img/illustrations/pencil-rule.svg'
import BalustradingIllustration from '../assets/img/illustrations/balustrading.svg'
import CementMixerIllustration from '../assets/img/illustrations/cement-mixer.svg'

const Home = ({ data }) => (
  <Layout headerLanding={true} lightBackground={false}>
    <SEO
      title="Architectural Stonework Solutions for Dry and Wet Cast Stone"
      description="We deliver to anywhere in the UK. Call 01327 842585 now for bespoke and standard Balls and Collard Bases, Balustrading, Corbels, Keystones, Pier Caps, Porticos, Quoins, Strings, Plinths, Wall Coping, Window Cills, Window Heads, Window Surrounds solutions"
      url=""
    />
    <ImageSection
      backgroundImageName={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Key-Stonework-project-1.jpg'
            ? image
            : ''
        )[0].node.fluid
      }
      rightToLeft={false}
    >
      <img
        className="illustration"
        src={BalustradingIllustration}
        alt="Balustrading"
      />
      <h2>96 Standard products</h2>
      <p>
        Over the last 15 years our team have developed a range of high-quality
        products that consistently produce outstanding results. Browse our
        technical drawings to see how Key Stonework products can be used on your
        project.
      </p>
      <TextLink
        linkText="View our brochure"
        linkPath={require('../assets/pdfs/Brochure.pdf')}
      />
    </ImageSection>
    <ImageSection
      backgroundImageName={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Key-Stonework-project-2.jpg'
            ? image
            : ''
        )[0].node.fluid
      }
      rightToLeft={true}
    >
      <img
        className="illustration"
        src={PencilRuleIllustration}
        alt="Pencil and ruler"
      />
      <h2>Bespoke design</h2>
      <p>
        Whether you have strict requirements or want to add a unique touch to an
        installation; our dedicated team will work with you to produce bespoke
        architectural stone that enhances your client’s project by adding
        character.
      </p>
      <TextLink linkText="Tell us about your project" linkPath="/contact" />
    </ImageSection>
    <ImageSection
      backgroundImageName={
        data.allImageSharp.edges.filter((image) =>
          image.node.fluid.originalName === 'Key-Stonework-project-3.jpg'
            ? image
            : ''
        )[0].node.fluid
      }
      rightToLeft={false}
    >
      <img
        className="illustration"
        src={CementMixerIllustration}
        alt="Cement mixer"
      />
      <h2>Dry &amp; wet cast stone</h2>
      <p>
        At Key Stonework we aim to satisfy any installation requirements you may
        have. All our stone is made with precision moulds, is 1217:2008 British
        Standard compliant, and can be manufactured dry or wet-cast.
      </p>
      <TextLink linkText="More about our service" linkPath="/our-service" />
    </ImageSection>
    <ProductListFull />
  </Layout>
)

export default Home

export const pageQuery = graphql`
  query HomepageImages {
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
