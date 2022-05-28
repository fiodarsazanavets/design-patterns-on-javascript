const Command = require("./command.js");

class DeleteCommand extends Command {

    #key;

    execute() {
        this._receiver.delete(this.#key);
    }

    constructor(key, receiver) {
        super(receiver);
        this.#key = key;
    }
}

module.exports = DeleteCommand;