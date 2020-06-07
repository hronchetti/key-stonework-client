import React from 'react'
import ProductPage from '../../templates/product-page'

export default function WallCoping() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'C100 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C100.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'C110 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C110.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'C120 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C120.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'C200 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C200.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'C210 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C210.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'C220 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C220.svg',
        },
      ],
    },
    {
      optionId: 7,
      optionName: 'C400 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C400.svg',
        },
      ],
    },
    {
      optionId: 8,
      optionName: 'C410 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C410.svg',
        },
      ],
    },
    {
      optionId: 9,
      optionName: 'C420 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C420.svg',
        },
      ],
    },
    {
      optionId: 10,
      optionName: 'C430 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C430.svg',
        },
      ],
    },
    {
      optionId: 11,
      optionName: 'C440 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C440.svg',
        },
      ],
    },
    {
      optionId: 12,
      optionName: 'C500 Wall Coping',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'wallCoping/C500.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Wall Coping and Bespoke Design"
      description="12 Wall coping that gracefully protects walls from weather damage. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Wall coping"
      productDecription="12 Standard products that gracefully protects walls from weather damage"
      openingText="Three standard styles of coping, the C1 a plain twice weathered coping. The C2 a plain once weathered coping and the C4 a moulded twice weathered coping. Our standard copings are manufactured in a range of sizes to suit most wall widths. All copings are supplied in a maximum length of 600mm. Copings can be manufactured to individual requirements."
      productOptions={productOptions}
      url="/products/wall-coping"
    />
  )
}