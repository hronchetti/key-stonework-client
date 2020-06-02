import React from 'react'
import Layout from '../Layout'
import OpeningText from './OpeningText'
import ProductOption from './ProductOption'
import ProductPageList from '../ProductPageList'
import PropTypes from 'prop-types'
import SEO from '../SEO'
import TrackVisibility from 'react-on-screen'
import { Carousel } from 'react-responsive-carousel'

const ProductPage = ({
  product,
  productDecription,
  technicalDrawingsPDF,
  title,
  description,
  openingText,
  productOptions,
}) => (
  <Layout
    lightBackground={true}
    headerTitle={product}
    headerSupportingText={productDecription}
    headerButtonText="Installation info"
    headerButtonURL={technicalDrawingsPDF}
  >
    <SEO title={title} description={description} />
    <section className="wrapper product">
      <ProductPageList />
      <TrackVisibility partialVisibility once className="product__features">
        {({ isVisible }) => (
          <div className={`inner ${isVisible ? 'active' : ''}`}>
            <Carousel>
              <div>
                <img
                  src={require('../../assets/img/Surrey4_large.jpg')}
                  alt="test"
                />
              </div>
              <div>
                <img
                  src={require('../../assets/img/Surrey3_large.jpg')}
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
}

export default ProductPage
