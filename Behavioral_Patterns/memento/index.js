const TextEditor = require('./textEditor.js');
const Caretaker = require('./caretaker.js');

var textEditor = new TextEditor();
var caretaker = new Caretaker(textEditor);

textEditor.updateText('Original text.');
console.log(`Updated text to '${textEditor.getCurrentText()}'.`);
caretaker.backup();
textEditor.updateText('First edit.');
console.log(`Updated text to '${textEditor.getCurrentText()}'.`);
caretaker.backup();
textEditor.updateText('Second edit.');
console.log(`Updated text to '${textEditor.getCurrentText()}'.`);
caretaker.backup();

textEditor.updateText('Third edit.');
console.log(`Updated text to '${textEditor.getCurrentText()}'.`);

caretaker.revert();
console.log(`Reverted text to '${textEditor.getCurrentText()}'.`);
caretaker.revert();
console.log(`Reverted text to '${textEditor.getCurrentText()}'.`);
caretaker.revert();
console.log(`Reverted text to '${textEditor.getCurrentText()}'.`);