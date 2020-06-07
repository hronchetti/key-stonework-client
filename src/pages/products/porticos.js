import React from 'react'
import ProductPage from '../../templates/product-page'

export default function Porticos() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'Portico Type A',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Portico',
          technicalDrawingSVG: 'porticos/type-a.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Entableture',
          technicalDrawingSVG: 'porticos/type-a-entableture.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'Portico Type B',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Portico',
          technicalDrawingSVG: 'porticos/type-b.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Entableture',
          technicalDrawingSVG: 'porticos/type-b-entableture.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'Portico Type C',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Portico',
          technicalDrawingSVG: 'porticos/type-c.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Entableture',
          technicalDrawingSVG: 'porticos/type-c-entableture.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Porticos and Bespoke Design"
      description="3 Portico products that make an entrance. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Porticos"
      productDecription="3 Standard products that make an entrance"
      technicalDrawingsPDF={require('../../assets/pdfs/Porticos.pdf')}
      productOptions={productOptions}
      url="/products/porticos"
    />
  )
}
