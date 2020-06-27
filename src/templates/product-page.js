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
  description,
  openingText,
  product,
  productDecription,
  productOptions,
  productPhotos,
  technicalDrawingsPDF,
  title,
  url,
}) => (
  <Layout
    lightBackground={true}
    headerTitle={product}
    headerSupportingText={productDecription}
    headerButtonText="Technical sheet"
    headerButtonURL={technicalDrawingsPDF}
  >
    <SEO title={title} description={description} url={url} />
    <section className="wrapper product">
      <ProductPageList />
      <TrackVisibility partialVisibility once className="product__features">
        {({ isVisible }) => (
          <div className={`inner animateFadeUp${isVisible ? ' active' : ''}`}>
            {productPhotos && productPhotos.length > 0 ? (
              <Carousel>
                {productPhotos.map((photo, index) => (
                  <div key={index}>
                    <img
                      src={require(`../assets/img/productPhotos/${photo}`)}
                      alt="test"
                    />
                  </div>
                ))}
              </Carousel>
            ) : (
              ''
            )}
            {openingText ? <OpeningText openingText={openingText} /> : null}
            {productOptions.map((productOption) => (
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

ProductPage.defaultProps = {
  productPhotos: [],
  technicalDrawingsPDF: '',
}

ProductPage.propTypes = {
  openingText: PropTypes.string,
  product: PropTypes.string.isRequired,
  productDecription: PropTypes.string.isRequired,
  productOptions: PropTypes.array.isRequired,
  productPhotos: PropTypes.array,
  technicalDrawingsPDF: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default ProductPage
