const CharacterHelperBuilder = require('./characterHelperBuilder.js');
const WindowsNewLineHelper = require('./windowsNewLineHelper.js');
const WindowsPathSeparatorHelper = require('./windowsPathSeparatorHelper.js');

class WindowsCharacterHelperBuilder extends CharacterHelperBuilder {

    addNewLineHelper() {
        this._characterHelper.newLineHelper = new WindowsNewLineHelper();
    }

    addPathSeparatorHelper() {
        this._characterHelper.pathSeparatorHelper = new WindowsPathSeparatorHelper();
    }
}

module.exports = WindowsCharacterHelperBuilder;