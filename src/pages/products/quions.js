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
      title="Dry/Wet Cast Stone Quions and Bespoke Design"
      description="6 Quion products that accentuate brickwork corners and edges. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Quions"
      productDecription="6 Standard products that accentuate brickwork corners and edges"
      openingText="Six standard designs, other strings and plinths can be manufactured to individual requirements. Strings are manufactured in 600mm long lengths, plinths are manufactured in 440mm long lengths."
      productOptions={productOptions}
      url="/products/quions"
    />
  )
}
