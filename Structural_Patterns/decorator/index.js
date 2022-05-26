const Gun = require('./gun.js');
const Silencer = require('./silencer.js');
const ExtendedMagazine = require('./extendedMagazine.js');

var gun = new Gun();

gun.reload();
gun.shoot();
gun.shoot();

console.log('Applying a silencer.');
var silencer = new Silencer();
silencer.setGun(gun);
silencer.shoot();
silencer.shoot();

console.log('Applying an extended magazine.');
var extendedMag = new ExtendedMagazine();
extendedMag.setGun(silencer);
extendedMag.reload();
extendedMag.shoot();
extendedMag.shoot();
extendedMag.shoot();
extendedMag.shoot();
extendedMag.shoot();
extendedMag.shoot();
extendedMag.shoot();
extendedMag.shoot();