import React from 'react'
import ProductPage from '../../templates/product-page'

export default function StringsAndPlinths() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'A600 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A600.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'A610 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A610.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'A620 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A620.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'A650 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A650.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'A660 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A660.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'A800 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A800.svg',
        },
      ],
    },
    {
      optionId: 7,
      optionName: 'A810 String/plinth',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'stringsPlinths/A810.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="String and Plinth Products by Key Stonework Ltd | Bespoke Design Available"
      description="7 String and plinth products that present to roofing and brickwork. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Strings &amp; plinths"
      productDecription="7 Standard products that present to roofing and brickwork"
      openingText="Bespoke strings and plinths can be created to individual requirements. Strings are manufactured in 600mm long lengths, plinths are manufactured in 440mm long lengths."
      productOptions={productOptions}
      url="/products/strings-and-plinths"
    />
  )
}
