const RequestHandler = require('./requestHandler.js');
const Response = require('./response.js');

class AuthenticationHandler extends RequestHandler {

    handleRequest(request) {
        if (request.username != 'John' ||
            request.password != 'password')
            return new Response(false, 'Invalid username or password.');

        if (this.successor)
            return this.successor.handleRequest(request);

        return new Response(true, 'Authentication successful.');
    }
}

module.exports = AuthenticationHandler;