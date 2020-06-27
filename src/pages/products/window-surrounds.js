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
      description="5 Window Surrounds that frame your vision. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Window surrounds"
      productDecription="5 Standard products that frame your vision"
      openingText="Nine standard designs to choose from.  
      All window heads can be manufactured to suit any window opening.<br><br>
      Window heads over 1400mm long will be made in more than one piece.
      Supporting lintols must be used as these window heads are non-structural members, handling reinforcement is allowed for.<br><br>
      These window heads can be produced in both Dry-Cast and Wet-Cast materials. Bespoke heads to suit existing or an individual design can also be catered for."
      productOptions={productOptions}
      url="/products/window-surrounds"
    />
  )
}
