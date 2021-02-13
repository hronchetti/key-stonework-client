import React from 'react'
import ProductPage from '../../templates/product-page'

export default function Balustrading() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'Classic Baluster',
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
      title="Balustrading Products by Key Stonework Ltd | Bespoke Design Available"
      description="4 Balustrading products perfect for lining staircases, terraces and balconies. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Balustrading"
      productDecription="4 Standard products perfect for lining staircases, terraces and balconies"
      productOptions={productOptions}
      productPhotos={[
        'balustrading/B1.jpeg',
        'balustrading/B2.jpeg',
        'balustrading/B3.jpeg',
        'balustrading/B5.jpeg',
        'balustrading/B6.jpeg',
        'balustrading/B7.jpeg',
        'balustrading/B8.jpeg',
      ]}
      url="/products/balustrading"
      openingText="Balustrade is an traditional decorative barrier without obscuring the view behind.
      Our Stone Balustrading can be used to enhance any property, whether used for finishing off a patio, lining a balcony, or, in the back garden as a feature.
      Bespoke designs can be made to order."
    />
  )
}
