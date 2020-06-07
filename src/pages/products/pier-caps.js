import React from 'react'
import ProductPage from '../../templates/product-page'

export default function PierCaps() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'PC210 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side View',
          technicalDrawingSVG: 'pierCaps/PC210.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'PC220 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side View',
          technicalDrawingSVG: 'pierCaps/PC220.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'PC225 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side View',
          technicalDrawingSVG: 'pierCaps/PC225.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'PC230 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side View',
          technicalDrawingSVG: 'pierCaps/PC230.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'PC235 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side View',
          technicalDrawingSVG: 'pierCaps/PC235.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'PC240 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side View',
          technicalDrawingSVG: 'pierCaps/PC240.svg',
        },
      ],
    },
    {
      optionId: 7,
      optionName: 'PC245 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC245.svg',
        },
      ],
    },
    {
      optionId: 8,
      optionName: 'PC250 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC250.svg',
        },
      ],
    },
    {
      optionId: 9,
      optionName: 'PC255 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC255.svg',
        },
      ],
    },
    {
      optionId: 10,
      optionName: 'PC310 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC310.svg',
        },
      ],
    },
    {
      optionId: 11,
      optionName: 'PC315 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC315.svg',
        },
      ],
    },
    {
      optionId: 12,
      optionName: 'PC320 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC320.svg',
        },
      ],
    },
    {
      optionId: 13,
      optionName: 'PC325 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC325.svg',
        },
      ],
    },
    {
      optionId: 14,
      optionName: 'PC420 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC420.svg',
        },
      ],
    },
    {
      optionId: 15,
      optionName: 'PC430 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC430.svg',
        },
      ],
    },
    {
      optionId: 16,
      optionName: 'PC450 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC450.svg',
        },
      ],
    },
    {
      optionId: 17,
      optionName: 'PC910 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC910.svg',
        },
      ],
    },
    {
      optionId: 18,
      optionName: 'PC920 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC920.svg',
        },
      ],
    },
    {
      optionId: 19,
      optionName: 'PC930 Pier Cap',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'pierCaps/PC930.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Pier Caps and Bespoke Design"
      description="19 Pier cap products that enhance wall piers. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Pier Caps"
      productDecription="19 Standard products that wall piers"
      technicalDrawingsPDF={require('../../assets/pdfs/PierCaps.pdf')}
      productOptions={productOptions}
      url="/products/pier-caps"
    />
  )
}
