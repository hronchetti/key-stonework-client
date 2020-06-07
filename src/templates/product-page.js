import React from 'react'
import TrackVisibility from 'react-on-screen'
import { Carousel } from 'react-responsive-carousel'
import PropTypes from 'prop-types'

import Layout from '../components/Layout'
import OpeningText from '../components/OpeningText'
import ProductOption from '../components/ProductOption'
import ProductPageList from '../components/ProductPageList'
import SEO from '../components/SEO'

const ProductPage = ({
  product,
  productDecription,
  technicalDrawingsPDF,
  title,
  description,
  openingText,
  productOptions,
  url,
}) => (
  <Layout
    lightBackground={true}
    headerTitle={product}
    headerSupportingText={productDecription}
    headerButtonText="Installation info"
    headerButtonURL={technicalDrawingsPDF}
  >
    <SEO title={title} description={description} url={url} />
    <section className="wrapper product">
      <ProductPageList />
      <TrackVisibility partialVisibility once className="product__features">
        {({ isVisible }) => (
          <div className={`inner animateFadeUp${isVisible ? ' active' : ''}`}>
            <Carousel>
              <div>
                <img
                  src={require('../assets/img/Surrey4_large.jpg')}
                  alt="test"
                />
              </div>
              <div>
                <img
                  src={require('../assets/img/Surrey3_large.jpg')}
                  alt="test"
                />
              </div>
            </Carousel>
            {openingText ? <OpeningText openingText={openingText} /> : null}
            {productOptions.map(productOption => (
              <ProductOption
                key={productOption.optionId}
                productOption={productOption}
              />
            ))}
          </div>
        )}
      </TrackVisibility>
    </section>
  </Layout>
)

ProductPage.propTypes = {
  openingText: PropTypes.string,
  product: PropTypes.string.isRequired,
  productDecription: PropTypes.string.isRequired,
  productOptions: PropTypes.array.isRequired,
  technicalDrawingsPDF: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default ProductPage
