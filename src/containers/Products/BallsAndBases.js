import React from 'react'
import ProductPage from '../../components/ProductPage'

export default function BallsAndBases() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'B225 Ball & CB225 collared base',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'ballsBases/B225-CG225.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'B225 Ball & PB225 plain base',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'ballsBases/B225-PB225.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'B300 Ball & CB300 collared base',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'ballsBases/B300-CB300.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'B300 Ball & PB300 plain base',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'ballsBases/B300-PB300.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'B430 Ball & CB430 collared base',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'ballsBases/B430-CB430.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'B430 Ball & PB430 plain base',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Default',
          technicalDrawingSVG: 'ballsBases/B430-PB430.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Dry/Wet Cast Stone Balls and Bases, Bespoke Design Available"
      description="6 Ball and Base products that give gateways and entrances character. For bespoke design call us on 01327 842585 or use the form on our contact page"
      product="Balls &amp; bases"
      productDecription="6 Standard products that give gateways and entrances character"
      productOptions={productOptions}
    />
  )
}
