const BasicTextToHtmlConverter = require('./basicTextToHtmlConverter.js');
const MdToHtmlConverter = require('./mdToHtmlConverter.js');

var inputText = 'This is the *first* paragraph.\n' +
    'This is the **second** paragraph.\n' +
    'This is the ~~third~~ paragraph.\n';

console.log('Text after using basic converter:');
var basicTextConverter = new BasicTextToHtmlConverter();
console.log(basicTextConverter.convertText(inputText));

console.log('Text after using MD converter:');
var mdToHtmlConverter = new MdToHtmlConverter();
console.log(mdToHtmlConverter.convertText(inputText));