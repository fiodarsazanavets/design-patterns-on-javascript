class Caretaker {
    
    #textEditor;
    #history = [];

    backup() {
        this.#history.push(this.#textEditor.save());
    }

    revert() {
        console.log('Restoring a snapshot from history.');

        if (this.#history.length == 0) {
            console.log('No snapshots to restore.');
            return;
        }

        this.#textEditor.setState(this.#history.pop());
    }

    constructor(textEditor) {
        this.#textEditor = textEditor;
    }
}

module.exports = Caretaker;