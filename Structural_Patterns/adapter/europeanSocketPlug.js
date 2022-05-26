const SocketPlug = require('./socketPlug.js');
const EuropeanElectricSocket = require('./europeanElectricSocket.js');

class EuropeanSocketPlug extends SocketPlug
{
    #europeanSocket;

    connectToSocket() {
        this.#europeanSocket.connectTwoPins();
    }

    selectSocket(socket) {

        if (!socket instanceof EuropeanElectricSocket) {
            throw 'The European plug can only be connected to a European socket.';
        }

        this.#europeanSocket = socket;
    }
}

module.exports = EuropeanSocketPlug;