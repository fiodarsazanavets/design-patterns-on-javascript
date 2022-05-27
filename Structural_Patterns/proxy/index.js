const DataServiceProxy = require('./dataServiceProxy.js');

var dataService = new DataServiceProxy();
dataService.insertData('item 1');
dataService.insertData('item 2');
dataService.insertData('item 3');

var data = dataService.getData();
console.log(`Items retrieved: ${data.length}`);
data = dataService.getData();
console.log(`Items retrieved: ${data.length}`);