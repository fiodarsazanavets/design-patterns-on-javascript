const CharacterHelperFactory = require('./characterHelperFactory.js');
const UnixNewLineHelper = require('./unixNewLineHelper.js');
const UnixPathSeparatorHelper = require('./unixPathSeparatorHelper.js');

class UnixCharacterHelperFactory extends CharacterHelperFactory {

    createNewLineHelper() {
        return new UnixNewLineHelper();
    }

    createPathSeparatorHelper() {
        return new UnixPathSeparatorHelper();
    }
}

module.exports = UnixCharacterHelperFactory;