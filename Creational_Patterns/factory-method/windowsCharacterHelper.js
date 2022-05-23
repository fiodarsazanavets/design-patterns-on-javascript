const CharacterHelper = require('./characterHelper.js');

class WindowsCharacterHelper extends CharacterHelper {

    getNewLine() {
        return '\r\n';
    }
}

module.exports = WindowsCharacterHelper;