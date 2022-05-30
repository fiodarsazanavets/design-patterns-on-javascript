const Aggregate = require("./aggregate.js");
const ListIterator = require("./listIterator.js")

class ListAggregate extends Aggregate {

    #collection = [];

    createIterator() {
        return new ListIterator(this);
    }
    
    count() {
        return this.#collection.length;
    }
    
    get(index) {
        return this.#collection[index];
    }

    insert(value) {
        this.#collection.push(value);
    }
}

module.exports = ListAggregate;