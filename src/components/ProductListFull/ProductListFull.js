import React from 'react'
import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import TrackVisibility from 'react-on-screen'

const ProductListFull = () => (
  <TrackVisibility partialVisibility once>
    {({ isVisible }) => (
      <section
        className={`lightBackground productList--full ${
          isVisible ? 'active' : ''
        }`}
      >
        <section className="wrapper">
          <h2 className="h2">Our products</h2>
          <section className="inner">
            <Product
              illustration="architectural.svg"
              productName="Architectural features"
              productPageSummary="7 Standard products<br/>Bespoke design available"
              productPagePath="/products/architectural-features"
            />
            <Product
              illustration="ball-collard-base.svg"
              productName="Balls &amp; bases"
              productPageSummary="6 Standard products<br/>Bespoke design available"
              productPagePath="/products/balls-and-bases"
            />
            <Product
              illustration="balustrading.svg"
              productName="Balustrading"
              productPageSummary="4 Standard products<br/>Bespoke design available"
              productPagePath="/products/balustrading"
            />
            <Product
              illustration="corbels.svg"
              productName="Corbels"
              productPageSummary="4 Standard products<br/>Bespoke design available"
              productPagePath="/products/corbels"
            />
            <Product
              illustration="keystones.svg"
              productName="Keystones"
              productPageSummary="8 Standard products<br/>Bespoke design available"
              productPagePath="/products/keystones"
            />
            <Product
              illustration="pier-caps.svg"
              productName="Pier caps"
              productPageSummary="19 Standard products<br/>Bespoke design available"
              productPagePath="/products/pier-caps"
            />
            <Product
              illustration="portico.svg"
              productName="Porticos"
              productPageSummary="3 Standard products<br/>Bespoke design available"
              productPagePath="/products/porticos"
            />
            <Product
              illustration="quoins.svg"
              productName="Quoins"
              productPageSummary="6 Standard products<br/>Bespoke design available"
              productPagePath="/products/quions"
            />
            <Product
              illustration="string-plinth.svg"
              productName="Strings &amp; plinths"
              productPageSummary="7 Standard products<br/>Bespoke design available"
              productPagePath="/products/strings-and-plinths"
            />
            <Product
              illustration="wall-coping.svg"
              productName="Wall coping"
              productPageSummary="12 Standard products<br/>Bespoke design available"
              productPagePath="/products/wall-coping"
            />
            <Product
              illustration="windows.svg"
              productName="Window cills &amp; heads"
              productPageSummary="15 Standard products<br/>Bespoke design available"
              productPagePath="/products/window-cills-and-heads"
            />
            <Product
              illustration="windows-surrounds.svg"
              productName="Window surrounds"
              productPageSummary="5 Standard products<br/>Bespoke design available"
              productPagePath="/products/window-surrounds"
            />
          </section>
        </section>
      </section>
    )}
  </TrackVisibility>
)

const Product = ({
  illustration,
  productName,
  productPagePath,
  productPageSummary,
}) => (
  <Link className="productCard" to={productPagePath}>
    <img
      className="illustration"
      src={require('../../assets/img/illustrations/' + illustration)}
      alt={productName}
    />
    <h3>{productName}</h3>
    <p dangerouslySetInnerHTML={{ __html: productPageSummary }} />
    <span className="textLink productLink">View product options</span>
  </Link>
)

Product.propTypes = {
  illustration: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPageSummary: PropTypes.string.isRequired,
  productPagePath: PropTypes.string.isRequired,
}

export default ProductListFull
