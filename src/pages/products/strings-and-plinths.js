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
      description="7 String and plinth products that support roofing and brickwork. For bespoke design call us on 01604 592 949 or use the form on our contact page"
      product="Strings &amp; plinths"
      productDecription="7 Standard products that support roofing and brickwork"
      productOptions={productOptions}
      productPhotos={[
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-1.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-2.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-3.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-4.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-5.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-6.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-7.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-8.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-9.jpg',
        'stringsPlinths/strings-and-plinths-portland-cast-stonework-by-key-stonework-10.jpg',
      ]}
      url="/products/strings-and-plinths"
      openingText="Our range of standard strings and plinths are designed to be built-in, and provide a pleaseing feature that helps break up large expanses of brickwork.
      Strings are manufactured in 600mm long lengths, plinths are manufactured in 440mm long lengths.
      Bespoke strings and plinths can be created to individual requirements."
    />
  )
}
