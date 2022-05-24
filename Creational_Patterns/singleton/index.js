const SingletonObject = require('./singletonObject.js');

var object1 = SingletonObject.getInstance();
console.log(`Data of object 1: ${object1.data}`);

var object2 = SingletonObject.getInstance();
console.log(`Data of object 2: ${object2.data}`);

console.log(`Are objects equal? ${object1 === object2}`);