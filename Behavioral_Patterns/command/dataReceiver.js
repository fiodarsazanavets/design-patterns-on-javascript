class DataReceiver {
    #data = { };

    upsert(key, value) {
        this.#data[key] = value;
        console.log(`Upserted: ${key} - ${value}.`);
    }

    delete(key) {

        if (key in this.#data) {
            delete this.#data[key];
            console.log(`Removed: ${key}.`);
        }
    }
}

module.exports = DataReceiver;