import React from 'react'
import ProductPage from '../../templates/product-page'

export default function ArchitecturalPieces() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'GV1 Gable vent',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/GV1.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'GV2 Gable vent',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/GV2.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'P100 Date plaque',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/P100.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'P120 Date plaque',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/P120.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'P200 Date plaque',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/P200.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'P220 Date plaque',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/P220.svg',
        },
      ],
    },
    {
      optionId: 7,
      optionName: 'Step & Tread Riser',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'architecturalPieces/step-and-tread-riser.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Architectural Feature Products by Key Stonework Ltd | Bespoke Design Available"
      description="7 Date plaque, gabel vent, and step and tread products that add a unique touch to your building. For bespoke design call us on 01604 592 949 or use the form on our contact page"
      product="Architectural features"
      productDecription="7 Standard products that add a unique touch to your building"
      productOptions={productOptions}
      technicalDrawingsPDF="/gable-vents-cast-stonework-technical-sheet.pdf"
      productPhotos={[
        'architecturalPieces/AF_1.jpeg',
        'architecturalPieces/AF_2.jpeg',
        'architecturalPieces/AF_3.jpeg',
        'architecturalPieces/AF_4.jpeg',
        'architecturalPieces/AF_5.jpeg',
        'architecturalPieces/AF_6.jpeg',
        'architecturalPieces/AF_7.jpeg',
        'architecturalPieces/AF_8.jpeg',
        'architecturalPieces/AF_9.jpeg',
        'architecturalPieces/AF_10.jpeg',
        'architecturalPieces/AF_11.jpeg',
        'architecturalPieces/AF_12.jpeg',
      ]}
      openingText="Date Plaque designs can also be used as house name plaques with bespoke sizes and typeface. 
      Our Step Treads are manufactured to suit your individual requirements, and are suitable for commercial and residential projects. All products available in Dry-Cast or Wet-Cast stone (please specify when enquiring)  Bespoke design available."
      url="/products/architectural-pieces"
    />
  )
}
