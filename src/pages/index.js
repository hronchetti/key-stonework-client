import React from 'react'
import zenscroll from 'zenscroll'

import Layout from '../components/Layout'
import ImageSection from '../components/ImageSection'
import ProductListFull from '../components/ProductListFull/ProductListFull'
import SEO from '../components/SEO'

const Home = () => (
  <Layout headerLanding={true} lightBackground={false}>
    <SEO
      title="Architectural Stonework Solutions for Dry and Wet Cast Stone"
      description="We deliver to anywhere in the UK. Call 01327 842585 now for bespoke and standard Balls and Collard Bases, Balustrading, Corbels, Keystones, Pier Caps, Porticos, Quoins, Strings, Plinths, Wall Coping, Window Cills, Window Heads, Window Surrounds solutions"
      url=""
    />
    <ImageSection
      backgroundImageName="Key-Stonework-project-1.jpg"
      content="Over the last 15 years our team have developed a range of high-quality products that consistently produce outstanding results. Browse our technical drawings to see how Key Stonework products can be used on your project."
      heading="96 Standard products"
      illustration="balustrading.svg"
      illustrationAlt="Balustrading"
      linkOnClick={() =>
        zenscroll.to(document.getElementsByClassName('productList--full')[0])
      }
      linkText="Browse our range"
      rightToLeft={false}
    />
    <ImageSection
      backgroundImageName="Key-Stonework-project-2.jpg"
      content="Whether you have strict requirements or want to add a unique aspect to an installation. Our dedicated team will work with you to produce bespoke architectural stone that enhances your client’s project by adding character."
      heading="Bespoke design"
      illustration="pencil-rule.svg"
      illustrationAlt="Pencil and ruler"
      linkPath="/contact"
      linkText="Tell us about your project"
      rightToLeft={true}
    />
    <ImageSection
      backgroundImageName="Key-Stonework-project-3.jpg"
      content="At Key Stonework we aim to satisfy any installation requirements you may have. All our stone is made with precision moulds, is 1217:2008 British Standard compliant and can be manufactured dry or wet-cast."
      heading="Dry &amp; wet cast stone"
      illustration="cement-mixer.svg"
      illustrationAlt="Cement mixer"
      linkPath="/our-service"
      linkText="Learn more about our service"
      rightToLeft={false}
    />
    <ProductListFull />
  </Layout>
)

export default Home
