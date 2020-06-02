import React from 'react'
import { Link } from 'gatsby'
import TrackVisibility from 'react-on-screen'

export default function ProductPageList() {
  return (
    <TrackVisibility partialVisibility once className="productPageList">
      {({ isVisible }) => (
        <aside className={isVisible ? ' active' : ''}>
          <h3>Products</h3>
          <ul>
            <li>
              <Link to="/products/architectural-pieces">
                Architectural pieces
              </Link>
            </li>
            <li>
              <Link to="/products/balls-and-bases">Balls &amp; bases</Link>
            </li>
            <li>
              <Link to="/products/balustrading">Balustrading</Link>
            </li>
            <li>
              <Link to="/products/corbels">Corbels</Link>
            </li>
            <li>
              <Link to="/products/keystones">Keystones</Link>
            </li>
            <li>
              <Link to="/products/pier-caps">Pier Caps</Link>
            </li>
            <li>
              <Link to="/products/porticos">Porticos</Link>
            </li>
            <li>
              <Link to="/products/quions">Quions</Link>
            </li>
            <li>
              <Link to="/products/strings-and-plinths">
                Strings &amp; plinths
              </Link>
            </li>
            <li>
              <Link to="/products/wall-coping">Wall coping</Link>
            </li>
            <li>
              <Link to="/products/window-cills-and-heads">
                Window cills &amp; heads
              </Link>
            </li>
            <li>
              <Link to="/products/window-surrounds">Window surrounds</Link>
            </li>
          </ul>
        </aside>
      )}
    </TrackVisibility>
  )
}
