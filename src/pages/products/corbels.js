import React from 'react'
import ProductPage from '../../templates/product-page'

export default function Corbels() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'A100 Corbel',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'corbels/A100.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'A120 Corbel',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'corbels/A120.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'A130L Corbel',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'corbels/A130L-side.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'corbels/A130L-top.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'A130R Corbel',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'corbels/A130R-side.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'corbels/A130R-top.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet cast stone Corbels and bespoke design"
      description="For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Corbels"
      productDecription="3 Standard products that make an entrance"
      productOptions={productOptions}
      url="/products/corbels"
    />
  )
}
