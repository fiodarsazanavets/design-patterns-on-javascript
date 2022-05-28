const RequestHandler = require('./requestHandler.js');
const Response = require('./response.js');

class AuthorizationHandler extends RequestHandler {

    handleRequest(request)
    {
        if (request.role != 'Admin')
            return new Response(false, 'User not authorized.');

        if (this.successor)
            return this.successor.handleRequest(request);

        return new Response(true, 'Authorization successful.');
    }
}

module.exports = AuthorizationHandler;