import React from 'react'
import ProductPage from '../../templates/product-page'

export default function WindowCillsHeads() {
  const productOptions = [
    {
      optionId: 1,
      optionName: 'C1 Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C1-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'windowCillsHeads/C1-top.svg',
        },
      ],
    },
    {
      optionId: 2,
      optionName: 'C1R Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C1R-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'windowCillsHeads/C1R-top.svg',
        },
      ],
    },
    {
      optionId: 3,
      optionName: 'C1T Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C1T-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'windowCillsHeads/C1T-top.svg',
        },
      ],
    },
    {
      optionId: 4,
      optionName: 'C2 Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C2-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'windowCillsHeads/C2-top.svg',
        },
      ],
    },
    {
      optionId: 5,
      optionName: 'C3 Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C3-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Side view',
          technicalDrawingSVG: 'windowCillsHeads/C3-top.svg',
        },
      ],
    },
    {
      optionId: 6,
      optionName: 'C4 Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C4-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'windowCillsHeads/C4-top.svg',
        },
      ],
    },
    {
      optionId: 7,
      optionName: 'C65 Cill',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Front view',
          technicalDrawingSVG: 'windowCillsHeads/C65-front.svg',
        },
        {
          drawingId: 2,
          technicalDrawingName: 'Top view',
          technicalDrawingSVG: 'windowCillsHeads/C65-top.svg',
        },
      ],
    },
    {
      optionId: 8,
      optionName: 'H1 Head',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H1.svg',
        },
      ],
    },
    {
      optionId: 9,
      optionName: 'H2 Head',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H2.svg',
        },
      ],
    },
    {
      optionId: 10,
      optionName: 'H3',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H3.svg',
        },
      ],
    },
    {
      optionId: 11,
      optionName: 'H4',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H4.svg',
        },
      ],
    },
    {
      optionId: 12,
      optionName: 'H5',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H5.svg',
        },
      ],
    },
    {
      optionId: 13,
      optionName: 'H6',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H6.svg',
        },
      ],
    },
    {
      optionId: 14,
      optionName: 'H7',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H7.svg',
        },
      ],
    },
    {
      optionId: 15,
      optionName: 'H8',
      optionTechnicalDrawings: [
        {
          drawingId: 1,
          technicalDrawingName: 'Plan view',
          technicalDrawingSVG: 'windowCillsHeads/H8.svg',
        },
      ],
    },
  ]

  return (
    <ProductPage
      title="Window Cill and Head Products by Key Stonework Ltd | Bespoke Design Available"
      description="15 Window cill and window head products that frame your vision. For bespoke design call us on 01604 592 949 or use the form on our contact page"
      product="Window cills &amp; heads"
      productDecription="15 Standard products that frame your vision"
      openingText="Our stone window cills and heads are non-structural and can be made to suit any window opening.<br><br>
      Bay window cills and heads are manufactured to suit 45° &amp; 90° angles, and, 
      any cills over 1400mm long will be made in more than one piece. All cills are produced with a drip to the underside.<br><br>      
      These cills can also be made in both Dry-Cast and Wet-Cast materials. Bespoke design available."
      productOptions={productOptions}
      productPhotos={[
        'windowCillsHeads/C1.jpeg',
        'windowCillsHeads/C2.jpeg',
        'windowCillsHeads/C3_Bullnosed_Cills_2.jpeg',
        'windowCillsHeads/C3_Bullnosed_Cills_3.jpeg',
        'windowCillsHeads/C5.jpeg',
        'windowCillsHeads/C6.jpeg',
        'windowCillsHeads/C7.jpeg',
        'windowCillsHeads/C8.jpeg',
        'windowCillsHeads/C9.jpeg',
        'windowCillsHeads/IMG_0431.jpeg',
        'windowCillsHeads/IMG_0432.jpeg',
        'windowCillsHeads/IMG_0433.jpeg',
        'windowCillsHeads/IMG_0437.jpeg',
        'windowCillsHeads/IMG_0459.jpeg',
        'windowCillsHeads/IMG_0460.jpeg',
        'windowCillsHeads/IMG_0461.jpeg',
      ]}
      url="/products/window-cills-and-heads"
      technicalDrawingsPDF="/window-cills-cast-stonework-technical-sheet.pdf"
    />
  )
}
