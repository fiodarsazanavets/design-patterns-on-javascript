class Command {
    _receiver;

    execute() {

    }

    constructor(receiver) {
        this._receiver = receiver;
    }
}

module.exports = Command;