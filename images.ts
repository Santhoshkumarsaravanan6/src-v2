/* eslint-disable @typescript-eslint/no-require-imports */
// Webpack bundles these images with the solution; SPFx loads them via require().
/** Images are bundled with the solution. Replace the files in ../assets with the client's own artwork (same file names) to update them. */
const hero: string = require('../assets/hero.png');
const logo: string = require('../assets/logo.png');
const fac1: string = require('../assets/fac1.png');
const fac2: string = require('../assets/fac2.png');
const n1: string = require('../assets/n1.png');
const n2: string = require('../assets/n2.png');
const n3: string = require('../assets/n3.png');
const jar: string = require('../assets/jar.png');
const dropper: string = require('../assets/dropper.png');
const bottle: string = require('../assets/bottle.png');
const tube: string = require('../assets/tube.png');
const flower: string = require('../assets/flower.png');

export const img: { [name: string]: string } = {
  hero,
  logo,
  fac1,
  fac2,
  n1,
  n2,
  n3,
  jar,
  dropper,
  bottle,
  tube,
  flower,
};
