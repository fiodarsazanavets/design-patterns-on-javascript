const Memento = require('./memento.js');

class TextEditorMemento extends Memento {
    #state;
    #created;

    getState() {
        return this.#state;
    }

    getCreatedDate() {
        return this.#created;
    }

    constructor(state) {
        super();
        this.#state = state;
        this.#created = new Date();
    }
}

module.exports = TextEditorMemento;