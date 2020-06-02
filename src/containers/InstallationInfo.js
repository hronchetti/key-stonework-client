import React from 'react'
import ImageSection from '../components/ImageSection'
import Banner from '../components/Banner'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function InstallationInfo() {
  return (
    <Layout
      lightBackground={false}
      headerTitle="Installation info"
      headerSupportingText="How to work with and store our products"
    >
      <SEO
        title="Installation Info | Cast Stone | Architectural Stone"
        description="Read our expert advice on how to store and use dry/wet cast stone products. For further questions or product enquiries get in contact on 01327 842585 or by emailing gary@keystonework.co.uk"
      />
      <ImageSection
        rightToLeft={false}
        backgroundImageName="Placeholder.jpg"
        heading="Handling &amp; storage"
        content="Key Stonework cast stone is supplied on pallets banded and wrapped for ease of handling. For the best results, these guidelines should be followed when moving Key Stonework cast stone:"
        list="bulletedDisc"
      />
      <ImageSection
        rightToLeft={true}
        backgroundImageName="Placeholder.jpg"
        heading="Mortar recommendations"
        content="Masonry cement and plasticised cement mortars are suitable for use with our cast stone. Mortars containing lime are highly recommended as they have a lower permeability are give greater resistance to rain penetration. <br><br>Mortars must be able to resist frost and develop durability quickly. However, unnecessarily strong mortars should be avoided as they concentrate the effect of any differential movement."
        linkExternal={false}
      />
      <Banner />
    </Layout>
  )
}
