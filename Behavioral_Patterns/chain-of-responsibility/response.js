class Response {
    
    success;
    message;

    constructor(success, message) {
        this.success = success;
        this.message = message;
    }
}

module.exports = Response;