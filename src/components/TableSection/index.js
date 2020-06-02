import React from 'react'
import TrackVisibility from 'react-on-screen'

const TableSection = () => (
  <section className="lightBackground">
    <section className="wrapper">
      <table cellPadding="0" border="0" cellSpacing="0" frame="0">
        <thead>
          <tr>
            <th>Dimension</th>
            <th>Tolerance</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>&gt; 600mm</td>
            <td>+/- 2mm</td>
          </tr>
          <tr>
            <td>601mm – 1000mm</td>
            <td>+/- 3mm</td>
          </tr>
          <tr>
            <td>1001mm - 2500mm</td>
            <td>+/- 4mm</td>
          </tr>
          <tr>
            <td>2501mm - 4000mm</td>
            <td>+/- 5mm</td>
          </tr>
          <tr>
            <td>&lt; 4000mm</td>
            <td>+/- 6mm</td>
          </tr>
        </tbody>
      </table>
      <TrackVisibility partialVisibility once className="tableSection__content">
        {({ isVisible }) => (
          <>
            <h2 className={isVisible ? 'active' : ''}>
              Manufacturing tolerance
            </h2>
            <p className={isVisible ? 'active' : ''}>
              For several years we’ve used precision moulds to create both
              standard and bespoke products that meet dimension requirements
              within millimeters.
              <br />
              <br />
              We guarantee every product produced by Key Stonework meets the
              dimensional tolerances permitted by the British Standard
              1217:2008.
            </p>
          </>
        )}
      </TrackVisibility>
    </section>
  </section>
)

export default TableSection
