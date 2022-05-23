const CharacterHelperFactory = require('./characterHelperFactory.js');
const UnixCharacterHelper = require('./unixCharacterHelper.js');

class UnixCharacterHelperFactory extends CharacterHelperFactory {

    createCharacterHelper() {
        return new UnixCharacterHelper();
    }
}

module.exports = UnixCharacterHelperFactory;