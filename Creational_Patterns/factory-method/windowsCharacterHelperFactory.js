const CharacterHelperFactory = require('./characterHelperFactory.js');
const WindowsCharacterHelper = require('./windowsCharacterHelper.js');

class WindowsCharacterHelperFactory extends CharacterHelperFactory {

    createCharacterHelper() {
        return new WindowsCharacterHelper();
    }
}

module.exports = WindowsCharacterHelperFactory;