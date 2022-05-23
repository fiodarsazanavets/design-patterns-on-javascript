const WindowsCharacterHelperFactory = require('./windowsCharacterHelperFactory.js');
const UnixCharacterHelperFactory = require('./unixCharacterHelperFactory.js');

var factory = process.platform == 'win32' ? 
    new WindowsCharacterHelperFactory() :
    new UnixCharacterHelperFactory();

var lineHelper = factory.createNewLineHelper();
var pathHelper = factory.createPathSeparatorHelper();

console.log(`This is the first line${lineHelper.getNewLine()}` +
    `This is a file path: source${pathHelper.getPathSeparator()}destination`);