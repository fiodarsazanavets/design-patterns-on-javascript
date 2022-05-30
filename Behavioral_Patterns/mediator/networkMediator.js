const Mediator = require('./mediator.js');

class NetworkMediator extends Mediator { 
    
    #participants = { };

    register(key, participant) {
        this.#participants[key] = participant;
    }

    sendCommand(receiver, sender, command) {
        if (receiver in this.#participants) {
            this.#participants[receiver].receiveCommand(sender, command);
        }
    }
}

module.exports = NetworkMediator;