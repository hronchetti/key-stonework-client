import React from 'react'
import ProductPage from '../../templates/product-page'

export default function Quions() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'Q100 Quion',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'quions/Q100.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'Q200 Quion',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'quions/Q200.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'Q300 Quion',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'quions/Q300.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'Q400 Quion',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'quions/Q400.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'Q500 Quion',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'quions/Q500.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'Q600 Quion',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'quions/Q600.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Quion Products by Key Stonework Ltd | Bespoke Design Available"
      description="6 Quion products that accentuate brickwork corners and edges. For bespoke design call us on 01604 592 949 or use the form on our contact page"
      product="Quions"
      productDecription="6 Standard products that accentuate brickwork corners and edges"
      productOptions={productOptions}
      productPhotos={[
        'quions/IMG_0474.jpeg',
        'quions/IMG_0480.jpeg',
        'quions/IMG_0482.jpeg',
        'quions/IMG_0491.jpeg',
        'quions/IMG_0493.jpeg',
        'quions/IMG_1139.jpeg',
      ]}
      url="/products/quions"
      openingText="We have six standard designs of build-in Quoins, including plain and chamfered to suit 3 or 4 course application. 
      Bespoke designs can be made to order."
    />
  )
}
