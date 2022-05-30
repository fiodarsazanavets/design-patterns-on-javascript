const Participant = require('./participant.js');

class DesktopComputer extends Participant {

    sendCommand(receiver, command) {
        console.log(`Sending ${command} command to ${receiver}.`);
        super.sendCommand(receiver, command);
    }

    receiveCommand(sender, command) {
        console.log(`Desktop computer ${this._key} received a command. `);
        super.receiveCommand(sender, command);
    }
}

module.exports = DesktopComputer;