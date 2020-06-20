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
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Architectural Pieces and Bespoke Design"
      description="6 Date plaque and gabel vent products that add a unique touch to your building. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Architectural features"
      productDecription="6 Standard products that add a unique touch to your building"
      productOptions={productOptions}
      openingText="Date plaque designs can also be used as house name plaques with bespoke sizes and typeface. All products available in Dry-Cast or Wet-Cast stone. Bespoke design available."
      url="/products/architectural-pieces"
    />
  )
}