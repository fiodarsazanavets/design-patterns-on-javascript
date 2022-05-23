const CharacterHelper = require('./characterHelper.js');

class UnixCharacterHelper extends CharacterHelper {

    getNewLine() {
        return '\n';
    }
}

module.exports = UnixCharacterHelper;