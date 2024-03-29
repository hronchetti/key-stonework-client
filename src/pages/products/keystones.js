import React from 'react'
import ProductPage from '../../templates/product-page'

export default function Keystones() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'KS1 Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS1.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'KS2 Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS2.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'KS2-C Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS2-C.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'KS3 Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS3.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'KS3-C Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS3-C.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'KS4 Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS4.svg',
        },
      ],
    },
    {
      optionId: 7,
      optionName: 'KS4-C Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS4-C.svg',
        },
      ],
    },
    {
      optionId: 8,
      optionName: 'KS5-C Keystone',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'keystones/KS5-C.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Keystone Products by Key Stonework Ltd | Bespoke Design Available"
      description="8 Keystone products that elevate arches. For bespoke design call us on 01604 592 949 or use the form on our contact page"
      product="Keystones"
      productDecription="8 Standard products that elevate arches"
      productOptions={productOptions}
      url="/products/keystones"
      openingText="We can offer range of eight Keystone designs to suit most applications. 
      Bespoke designs can be made to order."
    />
  )
}
