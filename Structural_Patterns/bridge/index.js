const BridgeInterface = require('./bridgeInterface.js');
const DataServiceImplementation = require('./dataServiceImplementation.js');

var bridgeInterface = new BridgeInterface();
bridgeInterface.implementation = new DataServiceImplementation();

console.log('Inserting item 1 into data service');
bridgeInterface.insertData('item 1');
console.log('Inserting item 2 into data service');
bridgeInterface.insertData('item 2');
console.log('Inserting item 3 into data service');
bridgeInterface.insertData('item 3');

console.log('Retrieving data from the service:');
bridgeInterface.getData();