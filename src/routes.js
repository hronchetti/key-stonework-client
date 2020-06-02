const path = require('path')
module.exports = [
  {
    path: '/',
    component: path.resolve(`src/containers/index.js`),
  },
  {
    path: '/our-service',
    component: path.resolve(`src/containers/OurService.js`),
  },
  {
    path: '/latest-projects',
    component: path.resolve(`src/containers/LatestProjects.js`),
  },
  {
    path: '/installation-info',
    component: path.resolve(`src/containers/InstallationInfo.js`),
  },
  {
    path: '/contact',
    component: path.resolve(`src/containers/Contact.js`),
  },
  {
    path: '/products/architectural-pieces',
    component: path.resolve(`src/containers/Products/ArchitecturalPieces.js`),
  },
  {
    path: '/products/balls-and-bases',
    component: path.resolve(`src/containers/Products/BallsAndBases.js`),
  },
  {
    path: '/products/balustrading',
    component: path.resolve(`src/containers/Products/Balustrading.js`),
  },
  {
    path: '/products/corbels',
    component: path.resolve(`src/containers/Products/Corbels.js`),
  },
  {
    path: '/products/keystones',
    component: path.resolve(`src/containers/Products/Keystones.js`),
  },
  {
    path: '/products/porticos',
    component: path.resolve(`src/containers/Products/Porticos.js`),
  },
  {
    path: '/products/pier-caps',
    component: path.resolve(`src/containers/Products/PierCaps.js`),
  },
  {
    path: '/products/quions',
    component: path.resolve(`src/containers/Products/Quions.js`),
  },
  {
    path: '/products/strings-and-plinths',
    component: path.resolve(`src/containers/Products/StringsAndPlinths.js`),
  },
  {
    path: '/products/wall-coping',
    component: path.resolve(`src/containers/Products/WallCoping.js`),
  },
  {
    path: '/products/window-cills-and-heads',
    component: path.resolve(`src/containers/Products/WindowCillsHeads.js`),
  },
  {
    path: '/products/window-surrounds',
    component: path.resolve(`src/containers/Products/WindowSurrounds.js`),
  },
  {
    path: '/admin',
    component: path.resolve(`src/containers/Admin.js`),
  },
  {
    path: '404',
    component: path.resolve(`src/containers/404.js`),
  },
]
