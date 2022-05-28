class RequestHandler {

    successor;

    handleRequest(request) {

    }

    setNext(successor) {
        this.successor = successor;
    }
}

module.exports = RequestHandler;