const WindowsCharacterHelperBuilder = require('./windowsCharacterHelperBuilder.js');
const UnixCharacterHelperBuilder = require('./unixCharacterHelperBuilder.js');
const CharacterHelperDirector = require('./characterHelperDirector.js');

var builder = process.platform == 'win32' ? 
    new WindowsCharacterHelperBuilder() :
    new UnixCharacterHelperBuilder();

var director = new CharacterHelperDirector();

var helper = director.buildHelper(builder);

var lineHelper = helper.newLineHelper;
var pathHelper = helper.pathSeparatorHelper;

console.log(`This is the first line${lineHelper.getNewLine()}` +
    `This is a file path: source${pathHelper.getPathSeparator()}destination`);