const Observer = require('./observer.js');

class Subscriber extends Observer {
    #name;

    update(subject, message) {
        console.log(`'${message}' message received from ${subject.name} by ${this.#name}.`);
    }

    constructor(name)
    {
        super();
        this.#name = name;
    }
}

module.exports = Subscriber;