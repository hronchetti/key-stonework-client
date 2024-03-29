import React from 'react'
import ProductPage from '../../templates/product-page'

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
      title="Ball and Base Products by Key Stonework Ltd | Bespoke Design Available"
      description="6 Ball and Base products that give gateways and entrances character. For bespoke design call us on 01604 592 949 or use the form on our contact page"
      product="Balls &amp; bases"
      productDecription="6 Standard products that give gateways and entrances character"
      productOptions={productOptions}
      productPhotos={[
        'ballsBases/B300.jpeg',
        'ballsBases/IMG_0504.jpeg',
        'ballsBases/IMG_0507.jpeg',
      ]}
      url="/products/balls-and-bases"
      openingText="Our traditionally designed Ball and Tapered Bases are suitable for adorning pier caps, gate piers, walls and steps. The Balls are available in 3 sizes with Plain and Collard Base options. All components are pre-drilled and come with a steel dowel for fixing.
      Bespoke designs can be made to order."
    />
  )
}
