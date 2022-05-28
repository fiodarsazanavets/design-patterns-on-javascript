const AuthenticationHandler = require('./authenticationHandler.js');
const AuthorizationHandler = require('./authorizationHandler.js');
const Request = require('./request.js');

var handler1 = new AuthenticationHandler();
var handler2 = new AuthorizationHandler();
handler1.setNext(handler2);

var request1 = new Request('Invalid', 'Invalid', null);
var request2 = new Request('John', 'password', 'User');
var request3 = new Request('John', 'password', 'Admin');

var response1 = handler1.handleRequest(request1);
var response2 = handler1.handleRequest(request2);
var response3 = handler1.handleRequest(request3);
console.log(`Response 1: Success - ${response1.success}, Message - ${response1.message}`);
console.log(`Response 2: Success - ${response2.success}, Message - ${response2.message}`);
console.log(`Response 3: Success - ${response3.success}, Message - ${response3.message}`);