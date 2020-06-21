import React from 'react'
import ProductPage from '../../templates/product-page'

export default function Balustrading() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'B740 Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Baluster',
          technicalDrawingSVG: 'balustrading/B740-baluster.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Pier',
          technicalDrawingSVG: 'balustrading/B740-pier.svg',
        },
        {
          drawingId: 3,
          technicalDrawingName: 'Pier Caps',
          technicalDrawingSVG: 'balustrading/B740-pier-caps.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'SB1 Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'balustrading/SB1-baluster.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'SB2 Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Baluster',
          technicalDrawingSVG: 'balustrading/SB2-baluster.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Pier',
          technicalDrawingSVG: 'balustrading/SB2-pier.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'SB3 Baluster',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Baluster',
          technicalDrawingSVG: 'balustrading/SB3-baluster.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Pier',
          technicalDrawingSVG: 'balustrading/SB3-pier.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'SB1, SB2, SB3 Pier Bases',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'balustrading/SB-pier-bases.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Balustrading Products and Bespoke Design"
      description="For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Balustrading"
      productDecription="4 Standard products"
      productOptions={productOptions}
      url="/products/balustrading"
    />
  )
}
