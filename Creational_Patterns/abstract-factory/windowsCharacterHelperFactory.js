const CharacterHelperFactory = require('./characterHelperFactory.js');
const WindowsNewLineHelper = require('./windowsNewLineHelper.js');
const WindowsPathSeparatorHelper = require('./windowsPathSeparatorHelper.js');

class WindowsCharacterHelperFactory extends CharacterHelperFactory {

    createNewLineHelper() {
        return new WindowsNewLineHelper();
    }

    createPathSeparatorHelper() {
        return new WindowsPathSeparatorHelper();
    }
}

module.exports = WindowsCharacterHelperFactory;