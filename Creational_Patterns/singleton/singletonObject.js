class SingletonObject {

    static #instance = null;
    
    data;

    static getInstance() {
        if (!this.#instance) {
            this.#instance = new SingletonObject(Math.random());
        }

        return this.#instance;
    }

    constructor(data) {
        this.data = data;
    }
}

module.exports = SingletonObject;