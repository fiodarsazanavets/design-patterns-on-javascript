class Participant {
    
    #mediator;
    _key;

    sendCommand(receiver, command) {
        this.#mediator.sendCommand(receiver, this._key, command);
    }

    receiveCommand(sender, command) {
        console.log(`Executing command ${command} issued by ${sender}.`);
    }

    constructor(key, mediator) {
        this._key = key;
        this.#mediator = mediator;
    }
}

module.exports = Participant;