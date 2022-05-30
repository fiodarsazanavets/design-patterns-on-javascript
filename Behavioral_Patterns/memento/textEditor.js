const TextEditorMemento = require('./textEditorMemento.js');

class TextEditor {
    #state = '';

    getCurrentText() {
	    return this.#state;
    }

    updateText(updatedText) {
        this.#state = updatedText;
    }

    save() {
        console.log('Saving state.');
        return new TextEditorMemento(this.#state);
    }

    setState(memento) {
        this.#state = memento.getState();
        console.log(`Restored the state from the snapshot created at ${memento.getCreatedDate()}.`);
    }
}

module.exports = TextEditor;