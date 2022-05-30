const ListAggregate = require('./listAggregate.js');
const SortedBinaryTreeCollection = require('./sortedBinaryTreeCollection.js');

var listOfValues = [8, 19, 25, 2, 4, 7, 32, 90, 3, 1];
var listAggregate = new ListAggregate();

for (var i = 0; i < listOfValues.length; i++) {
    listAggregate.insert(listOfValues[i]);
}

var listIterator = listAggregate.createIterator();

var message = 'Values from List Iterator: ';

while (listIterator.moveNext()) {
    message += listIterator.getCurrent() + ', ';
}

console.log(message);

var treeAggregate = new SortedBinaryTreeCollection();

for (var i = 0; i < listOfValues.length; i++) {
    treeAggregate.insert(listOfValues[i]);
}

var treeIterator = treeAggregate.createIterator();

console.log('');
message = 'Values from Binary Tree Iterator: ';

while (treeIterator.moveNext()) {
    message += treeIterator.getCurrent() + ', ';
}

console.log(message);