/*
 * TODO: install cylon
 *
 *  npm install -g cylon cylon-ble cylon-mip
 *
 *  Find your UUID with:
 *
 *      $ sudo cylon-ble-scan
 *
 * Then,
 *
 *      $ sudo cylon-ble-info YOUR_UUID
 *
 * For more info, see:
 *
 * - http://cylonjs.com/documentation/platforms/mip/
 * - http://cylonjs.com/documentation/drivers/mip/
 *
 */

var Cylon = require('cylon');
var UUID = "";

Cylon.robot({
  connections: { bluetooth: {adaptor: 'central', uuid: UUID, module: 'cylon-ble'}},
  devices: {mip: {driver: 'mip'}},

  work: function(my) {
    my.mip.setHeadLED(2, 2, 2, 2);
    after((2).seconds(), function() {
      my.mip.driveDistance(0, 10, 0, 0);
    });
    after((3).seconds(), function() {
      my.mip.setHeadLED(1, 1, 1, 1);
    });
  }
}).start();
