const DataReceiver = require('./dataReceiver.js');
const DataCommandInvoker = require('./dataCommandInvoker.js');
const UpsertCommand = require('./upsertCommand.js');
const DeleteCommand = require('./deleteCommand.js');

var dataReceiver = new DataReceiver();
var invoker = new DataCommandInvoker();
invoker.setCommand(new UpsertCommand('item1', 'value1', dataReceiver));
invoker.executeCommand();
invoker.setCommand(new DeleteCommand('item1', dataReceiver));
invoker.executeCommand();