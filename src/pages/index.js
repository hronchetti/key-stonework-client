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
      title="Premium Architectural Stonework Solutions Specialising in Dry and Wet Cast Stone"
      description="96 Standard Products with bespoke design available for all installations and delivery to anywhere in the UK. All products available in dry or wet cast. Call 01327 842585 today to tell us about your project to find out how we can help"
      url=""
    />
    <ImageSection
      backgroundImage={data.project1.fluid}
      backgroundImageAlt="Key Stonework balustrading, quions and string/plinth bath stone installation"
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
        products that consistently produce outstanding results. Download our
        brochure today to see how Key Stonework products can be used on your
        project
      </p>
      <TextLink linkText="View our brochure" linkPath="/Brochure.pdf" />
    </ImageSection>
    <ImageSection
      backgroundImage={data.project2.fluid}
      backgroundImageAlt="Key Stonework portcio, balustrading, window head, and window cill portland stone installation"
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
        installation our dedicated team is dedicated to satisfying your bespoke
        architectural stone requirements. Tell us about your project today to
        find out how we can help
      </p>
      <TextLink linkText="Tell us about your project" linkPath="/contact" />
    </ImageSection>
    <ImageSection
      backgroundImage={data.project3.fluid}
      backgroundImageAlt="Key Stonework portico and window cill bath stone installation"
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
        Standard compliant, and can be manufactured dry or wet-cast
      </p>
      <TextLink linkText="More about our service" linkPath="/our-service" />
    </ImageSection>
    <ImageSection
      backgroundImage={data.project2.fluid}
      backgroundImageAlt="Key Stonework portcio, balustrading, window head, and window cill portland stone installation"
      rightToLeft={true}
    >
      <img
        className="illustration"
        src={PencilRuleIllustration}
        alt="Pencil and ruler"
      />
      <h2>Colours</h2>
      <p>Test</p>
      <TextLink linkText="Tell us about your project" linkPath="/contact" />
    </ImageSection>
    <ProductListFull />
  </Layout>
)

export default Home

export const pageQuery = graphql`
  query HomepageImages {
    project1: imageSharp(
      fluid: { originalName: { eq: "Key-Stonework-project-1.jpg" } }
    ) {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
    project2: imageSharp(
      fluid: { originalName: { eq: "Key-Stonework-project-2.jpg" } }
    ) {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
    project3: imageSharp(
      fluid: { originalName: { eq: "Key-Stonework-project-3.jpg" } }
    ) {
      fluid(maxWidth: 1280) {
        ...GatsbyImageSharpFluid
      }
    }
  }
`
