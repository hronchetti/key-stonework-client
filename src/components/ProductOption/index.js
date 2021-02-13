import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Button from '../Button'
import Modal from '../Modal'

const ProductOption = ({ productOption }) => {
  const [currentImage, setCurrentImage] = useState({
    id: productOption.optionTechnicalDrawings[0].drawingId,
    name: productOption.optionTechnicalDrawings[0].technicalDrawingName,
    url: productOption.optionTechnicalDrawings[0].technicalDrawingSVG,
  })
  const [modal, setModal] = useState({
    isVisible: false,
    imageUrl: '',
    title: '',
  })

  const multiAngle = productOption.optionTechnicalDrawings.length > 1
  return (
    <>
      <figure
        className={`productOption__container${
          multiAngle ? '' : ' productOption__container--singleAngle'
        }`}
      >
        <h2>{productOption.optionName}</h2>
        <p className="productOption__note">
          Available dry/wet cast, in Bath and Portland stone (colours)
        </p>
        <img
          className={multiAngle ? 'multiAngle' : ''}
          src={
            productOption
              ? require(`../../assets/img/technicalDrawings/${currentImage.url}`)
              : ''
          }
          role="presentation"
          alt={currentImage.name}
          title={currentImage.name}
          onClick={() =>
            setModal({
              isVisible: true,
              imageUrl: currentImage.url,
              title: currentImage.name,
            })
          }
          tabIndex="0" // eslint-disable-line
          onKeyDown={(e) =>
            e.keyCode === 13 &&
            setModal({
              isVisible: true,
              imageUrl: currentImage.url,
              title: currentImage.name,
            })
          }
          aria-label="View this image in a pop up"
        />
        {multiAngle && (
          <>
            <p>Drawings</p>
            {productOption.optionTechnicalDrawings.map(
              ({ drawingId, technicalDrawingName, technicalDrawingSVG }) => (
                <Button
                  key={drawingId}
                  additionalClasses={`button--small${
                    currentImage.id !== drawingId ? ' button--secondary' : ''
                  }`}
                  buttonText={technicalDrawingName}
                  onClick={() =>
                    setCurrentImage({
                      id: drawingId,
                      name: technicalDrawingName,
                      url: technicalDrawingSVG,
                    })
                  }
                />
              )
            )}
          </>
        )}
      </figure>
      {modal.isVisible && (
        <Modal
          image={modal.imageUrl}
          title={modal.title}
          closeFunc={() =>
            setModal({
              isVisible: false,
              imageUrl: '',
              title: '',
            })
          }
        />
      )}
    </>
  )
}

ProductOption.propTypes = {
  productOption: PropTypes.object.isRequired,
}

export default ProductOption
