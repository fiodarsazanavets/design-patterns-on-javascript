const WindowsCharacterHelperFactory = require('./windowsCharacterHelperFactory.js');
const UnixCharacterHelperFactory = require('./unixCharacterHelperFactory.js');

var factory = process.platform == 'win32' ? 
    new WindowsCharacterHelperFactory() :
    new UnixCharacterHelperFactory();

var helper = factory.createCharacterHelper();

console.log(`This is the first line${helper.getNewLine()}This is the second line`);