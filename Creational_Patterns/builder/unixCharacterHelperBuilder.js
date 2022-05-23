const CharacterHelperBuilder = require('./characterHelperBuilder.js');
const UnixNewLineHelper = require('./unixNewLineHelper.js');
const UnixPathSeparatorHelper = require('./unixPathSeparatorHelper.js');

class UnixCharacterHelperBuilder extends CharacterHelperBuilder {

    addNewLineHelper() {
        this._characterHelper.newLineHelper = new UnixNewLineHelper();
    }

    addPathSeparatorHelper() {
        this._characterHelper.pathSeparatorHelper = new UnixPathSeparatorHelper();
    }
}

module.exports = UnixCharacterHelperBuilder;