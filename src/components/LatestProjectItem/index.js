import React from 'react'
import Button from '../Button'

const LatestProjectItem = ({
  projectName,
  projectDate,
  products,
  productPhotos,
}) => (
  <article className="latestProjectItem">
    <section className="projectHeader">
      <h2>{projectName === '' ? 'Project name' : projectName}</h2>
      <span>{projectDate}</span>
    </section>
    {productPhotos && productPhotos.length > 0 ? (
      <section
        className={`productPhotos productPhotos--${productPhotos.length}`}
      >
        {productPhotos.map((productPhoto, index) => (
          <div
            className="productPhoto"
            key={index}
            style={{
              backgroundImage: `url(${productPhoto.path})`,
            }}
          />
        ))}
      </section>
    ) : (
      <section className="productPhotosPlaceholder"></section>
    )}
    {products.architecturalPieces ||
    products.ballsCollardBases ||
    products.balustrading ||
    products.corbels ||
    products.keystones ||
    products.pierCaps ||
    products.porticos ||
    products.quions ||
    products.stringsPlinths ||
    products.wallCoping ||
    products.windowCillsHeads ||
    products.windowSurrounds ? (
      <section className="projectFooter">
        <p>Featured products</p>
        {products.architecturalPieces ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Architectural Pieces"
            buttonURL="/products/architectural-pieces"
          />
        ) : null}
        {products.ballsCollardBases ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Balls &amp; collard bases"
            buttonURL="/products/balls-and-bases"
          />
        ) : null}
        {products.balustrading ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Balustrading"
            buttonURL="/products/balustrading"
          />
        ) : null}
        {products.corbels ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Corbels"
            buttonURL="/products/corbels"
          />
        ) : null}
        {products.keystones ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Keystones"
            buttonURL="/products/keystones"
          />
        ) : null}
        {products.pierCaps ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Pier caps"
            buttonURL="/products/pier-caps"
          />
        ) : null}
        {products.porticos ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Porticos"
            buttonURL="/products/porticos"
          />
        ) : null}
        {products.quions ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Quions"
            buttonURL="/products/quions"
          />
        ) : null}
        {products.stringsPlinths ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Strings &amp; plinths"
            buttonURL="/products/strings-and-plinths"
          />
        ) : null}
        {products.wallCoping ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Wall Coping"
            buttonURL="/products/wall-coping"
          />
        ) : null}
        {products.windowCillsHeads ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Window cills &amp; heads"
            buttonURL="/products/window-cills-and-heads"
          />
        ) : null}
        {products.windowSurrounds ? (
          <Button
            additionalClasses="button--small button--secondary"
            buttonText="Window surrounds"
            buttonURL="/products/window-surrounds"
          />
        ) : null}
      </section>
    ) : null}
  </article>
)

export default LatestProjectItem
