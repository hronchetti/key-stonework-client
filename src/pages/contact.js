import React from 'react'
import TrackVisibility from 'react-on-screen'

import FormContact from '../components/FormContact'
import Layout from '../components/Layout'
import OpeningText from '../components/OpeningText'
import ProductPageList from '../components/ProductPageList'
import SEO from '../components/SEO'

const Contact = () => (
  <Layout
    lightBackground={true}
    headerTitle="Get a quote"
    headerSupportingText={`Call us on <a class="header__contactOption" href="tel:01604 592 949">01604 592 949</a><br>Email us at <a href="mailto:info@keystonework.co.uk" class="header__contactOption">info@keystonework.co.uk</a>`}
  >
    <SEO
      title="Get a Quote for Bespoke Cast Stone in Your Project | Key Stonework Ltd"
      description="Do you want more information about our architectural cast stone products? Do you have complicated bespoke installation requirements you'd like to discuss? Get in contact now by calling 01604 592 949 or using our online form"
      url="/contact"
    />
    <section className="wrapper product">
      <ProductPageList />
      <TrackVisibility partialVisibility once className="product__features">
        {({ isVisible }) => (
          <div className={`inner animateFadeUp${isVisible ? ' active' : ''}`}>
            <OpeningText
              openingText="At Key Stonework we aim to meet all of your architectural stonework requirements. Whether you’re interested in our standard products or want to ask questions about creating something bespoke - we want to hear about it.<br/><br/>Use the form below to describe your project and we’ll ring you or reply via email within 24 hours."
              openingTitle="Tell us about your project"
            />
            <FormContact />
          </div>
        )}
      </TrackVisibility>
    </section>
  </Layout>
)

export default Contact
