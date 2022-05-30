const Participant = require('./participant.js');

class Server extends Participant {

    sendCommand(receiver, command) {
        console.log(`Server has issued ${command} command to ${receiver}.`);
        super.sendCommand(receiver, command);
    }

    receiveCommand(sender, command) {
        console.log(`Server ${this._key} received a command. `);
        super.receiveCommand(sender, command);
    }
}

module.exports = Server;