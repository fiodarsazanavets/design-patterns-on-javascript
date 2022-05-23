const CharacterHelper = require("./characterHelper");

class NewLineHelperBuilder {

    _characterHelper;

    addNewLineHelper() {
    }

    addPathSeparatorHelper() {
    }

    build() {
        return this._characterHelper;
    }

    constructor() {
        this._characterHelper = new CharacterHelper();
    }
}

module.exports = NewLineHelperBuilder;