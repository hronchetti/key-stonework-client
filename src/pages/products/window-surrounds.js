import React from 'react'
import ProductPage from '../../templates/product-page'

export default function WindowSurrounds() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'Chamfered Surround 1',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'windowSurrounds/Chamfered-surround-1.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'Chamfered Surround 2',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'windowSurrounds/Chamfered-surround-2.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'Chamfered Surround 3',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'windowSurrounds/Chamfered-surround-3.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'CS1 Circular Surround',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'windowSurrounds/CS1.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'CS2 Circular Surround',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'windowSurrounds/CS2.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Window Surround Products by Key Stonework Ltd | Bespoke Design Available"
      description="5 Window surrounds that frame your vision. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Window surrounds"
      productDecription="5 Standard products that frame your vision"
      openingText="A popular option in new build houses, our standard chamfered surround can be manufactured to suit most window openings."
      productOptions={productOptions}
      productPhotos={[
        'windowSurrounds/window-surround-portland-cast-stonework-by-key-stonework-1.jpg',
        'windowSurrounds/window-surround-portland-cast-stonework-by-key-stonework-2.jpg',
        'windowSurrounds/window-surround-portland-cast-stonework-by-key-stonework-3.jpg',
        'windowSurrounds/window-surround-portland-cast-stonework-by-key-stonework-4.jpg',
        'windowSurrounds/window-surround-portland-cast-stonework-by-key-stonework-5.jpg',
        'windowSurrounds/window-surround-portland-cast-stonework-by-key-stonework-6.jpg',
      ]}
      url="/products/window-surrounds"
      technicalDrawingsPDF="/window-surround-cast-stonework-technical-sheet.pdf"
    />
  )
}
