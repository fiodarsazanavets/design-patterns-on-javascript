const Command = require("./command.js");

class UpsertCommand extends Command {

    #key;
    #value;

    execute() {
        this._receiver.upsert(this.#key, this.#value);
    }

    constructor(key, value, receiver) {
        super(receiver);

        this.#key = key;
        this.#value = value;
    }
}

module.exports = UpsertCommand;