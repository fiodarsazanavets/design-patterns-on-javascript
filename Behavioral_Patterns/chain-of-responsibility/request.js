class Request {
    username;
    password;
    role;

    constructor(username, password, role) {
        this.username = username;
        this.password = password;
        this.role = role;
    }
}

module.exports = Request;