const SocketAdapter = require('./socketAdapter.js');
const EuropeanSocketPlug = require('./europeanSocketPlug.js');
const EuropeanElectricSocket = require('./europeanElectricSocket.js');
const BritishElectricSocket = require('./britishElectricSocket.js');

var socketPlug = new EuropeanSocketPlug();
socketPlug.selectSocket(new EuropeanElectricSocket());
socketPlug.connectToSocket();

var adapter = new SocketAdapter();
adapter.selectSocket(new BritishElectricSocket());
adapter.connectToSocket();

socketPlug.selectSocket(adapter);
socketPlug.connectToSocket();