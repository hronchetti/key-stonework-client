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
      title="Pier Cap Products by Key Stonework Ltd | Bespoke Design Available"
      description="19 Pier cap products that enhance wall piers. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Pier Caps"
      productDecription="19 Standard products that enhance wall piers"
      openingText="Our Pier Caps are ideal to enhance an entrance or boundary wall. With a variety of standard designs there is plenty of choice. Bespoke Pier Caps can be manufactured to suit your individual requirements. Products are available in Dry-Cast or Wet-Cast stone (please specify when enquiring)."
      technicalDrawingsPDF="/pier-caps-cast-stonework-technical-sheet.pdf"
      productOptions={productOptions}
      productPhotos={[
        'pierCaps/PC1.jpeg',
        'pierCaps/PC2.jpeg',
        'pierCaps/PC3.jpeg',
        'pierCaps/PC4.jpeg',
        'pierCaps/PC5.jpeg',
        'pierCaps/PC6.jpeg',
        'pierCaps/PC7.jpeg',
      ]}
      url="/products/pier-caps"
    />
  )
}
