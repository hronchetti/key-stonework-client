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
      title="Portico Products by Key Stonework Ltd | Bespoke Design Available"
      description="3 Portico products that make an entrance. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Porticos"
      productDecription="3 Standard products that make an entrance"
      technicalDrawingsPDF="/porticos-cast-stonework-technical-sheet.pdf"
      openingText="A Portico can greatly enhance the look of a building, and possibly even the value. With three standard Porticos that are manufactured to specifically  suit your properties requirements, plus our ability to manufacture bespoke structures, Key Stonework Ltd can make your vision actually happen."
      productOptions={productOptions}
      productPhotos={[
        'porticos/P1.jpeg',
        'porticos/P2.jpeg',
        'porticos/P3.jpeg',
        'porticos/P5.jpeg',
        'porticos/P6.jpeg',
        'porticos/P7.jpeg',
        'porticos/P8.jpeg',
        'porticos/P9.jpeg',
        'porticos/P10.jpeg',
      ]}
      url="/products/porticos"
    />
  )
}
