import React from 'react'
import ProductPage from '../../components/ProductPage'

export default function Balustrading() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'B500G Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'B610G Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'B740G Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'Balustrade pier cap options',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'A1',
          technicalDrawingSVG: 'porticos/portico-type-a.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Balustrading Products and Bespoke Design"
      description="For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Balustrading"
      productDecription="3 Standard products that make an entrance"
      productOptions={productOptions}
    />
  )
}
