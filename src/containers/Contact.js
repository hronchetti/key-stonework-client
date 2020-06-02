import React from 'react'
import FormContact from '../components/FormContact'
import Layout from '../components/Layout'
import OpeningText from '../components/ProductPage/OpeningText'
import ProductPageList from '../components/ProductPageList'
import SEO from '../components/SEO'
import TrackVisibility from 'react-on-screen'

export default function Contact() {
  return (
    <Layout
      lightBackground={true}
      headerTitle="Contact us"
      headerSupportingText="Call us on 01327 842585<br>Email us at info@keystonework.co.uk"
    >
      <SEO
        title="Tell us about your project | Contact us"
        description="Looking to use dry/wet cast stone in an upcoming build? Hoping to compare prices for different products? Have complicated bespoke installation requirements you'd like to discuss? Get in contact now by emailing gary@keystonework.co.uk or calling 01327 842585"
      />
      <section className="wrapper product">
        <ProductPageList />
        <TrackVisibility partialVisibility once className="product__features">
          {({ isVisible }) => (
            <div className={`inner ${isVisible ? 'active' : ''}`}>
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
}
