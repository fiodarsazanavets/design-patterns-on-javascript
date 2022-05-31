const MdConverterVisitor = require('./mdConverterVisitor.js');
const TextToHtmlConverter = require('./textToHtmlConverter.js');
const HtmlToTextConverter = require('./htmlToTextConverter.js');

var mdText = 'This is the *first* paragraph.\n' +
'This is the **second** paragraph.\n' +
'This is the ~~third~~ paragraph.\n';

var htmlText = '<p>This is <strong>first</strong> paragraph.</p>\n' +
'<p>This is <em>second</em> paragraph.</p>\n' +
'<p>This is <del>third</del> paragraph.</p>\n' +
'<br/>';

var visitor = new MdConverterVisitor();
var textToHtmlConverter = new TextToHtmlConverter();
var htmlToTextConverter = new HtmlToTextConverter();

console.log('MD text converted to HTML:');
console.log(textToHtmlConverter.accept(visitor, mdText));
console.log('');
console.log('HTML text converted to MD:');
console.log(htmlToTextConverter.accept(visitor, htmlText));