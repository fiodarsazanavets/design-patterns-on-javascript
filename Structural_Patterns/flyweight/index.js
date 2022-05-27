const FlyweightFactory = require('./flyweightFactory.js');

var factory = new FlyweightFactory();
var army = { };

console.log('Adding militiamen to the army.');
for (var i = 0; i < 1000; i++) {
    army[i] = factory.getFlyweight('Militiaman');
}

console.log('Adding soldiers to the army.');
for (var i = 0; i < 100; i++) {
    army[i + 1000] = factory.getFlyweight('Soldier');
}

console.log('Adding knights to the army.');
for (var i = 0; i < 10; i++) {
    army[i + 1100] = factory.getFlyweight('Knight');
}

console.log(`Total army size is ${Object.keys(army).length}.`);