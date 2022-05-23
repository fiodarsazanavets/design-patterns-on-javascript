const CharacterHelper = require('./characterHelper.js');

class CharacterHelperFactory {

    createCharacterHelper() {
        return new CharacterHelper();
    }
}

module.exports = CharacterHelperFactory;