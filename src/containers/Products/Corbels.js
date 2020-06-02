import React from 'react'
import ProductPage from '../../components/ProductPage'

export default function Corbels() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'A100 Corbel',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'A120 Corbel',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
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
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
        {
          drawingId: 3,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
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
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
        {
          drawingId: 3,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
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
    />
  )
}
