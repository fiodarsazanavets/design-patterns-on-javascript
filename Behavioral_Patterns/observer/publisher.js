const Subject = require('./subject.js');

class Publisher extends Subject {

    #name;
    #observers;

    subscribe(observer) {
        this.#observers.push(observer);
    }

    unsubscribe(observer) {
        this.#observers.splice(this.#observers.indexOf(observer), 1);
    }

    notify(message) {
        for (var i = 0;  i < this.#observers.length; i++) {
            this.#observers[i].update(this, message);
        }
    }

    constructor(name) {
        super();
        this.name = name;
        this.#observers = [];
    }
}

module.exports = Publisher;