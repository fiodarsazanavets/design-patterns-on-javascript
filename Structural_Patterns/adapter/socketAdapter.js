const SocketPlug = require("./socketPlug");
const BritishElectricSocket = require("./britishElectricSocket");

class SocketAdapter extends SocketPlug {
    #britishSocket;

    connectToSocket() {
        this.#britishSocket.connectThreePins();
    }

    connectTwoPins() {
        console.log('Double-pin plug has been successfully connected to the adapter.');
    }

    selectSocket(socket) {
        if (!socket instanceof BritishElectricSocket) {
            throw 'The adapter can only be connected to a British socket.';
        }

        this.#britishSocket = socket;
    }
}

module.exports = SocketAdapter;