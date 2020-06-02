import React from 'react'
import ImageSection from '../components/ImageSection'
import TableSection from '../components/TableSection'
import Layout from '../components/Layout'
import SEO from '../components/SEO'

export default function OurService() {
  return (
    <Layout
      lightBackground={false}
      headerTitle="Our service"
      headerSupportingText="Quality you can count on before and after installation"
    >
      <SEO
        title="Our Service | Cast Stone | Architectural Stone"
        description="Manufactured in Northamptonshire, our stone is made with expert precision moulds, is British Standard 1217:2008 compliant, is available in bath or portland stone and dry or wet cast"
      />
      <ImageSection
        rightToLeft={false}
        backgroundImageName="Placeholder.jpg"
        heading="Our stone"
        content="Manufactured in Northamptonshire, our stone is made with expert precision moulds and is available in dry and wet cast."
        list="bulletedTicks"
      />
      <ImageSection
        rightToLeft={true}
        backgroundImageName="Placeholder.jpg"
        heading="Standards"
        content="For the last 15 years we have continued to produce dry and wet cast stone of exceptional quality. We assure our customers that every product we create (bespoke or standard) satisfies all British Standard 1217:2008 requirements. This includes dimension tolerances, flatness of plane surface, permeability, durability and compressive strength."
        linkText="More about British Standard 1217:2008"
        linkPath="https://shop.bsigroup.com/ProductDetail/?pid=000000000030172628"
        linkExternal={true}
      />
      <TableSection />
    </Layout>
  )
}
