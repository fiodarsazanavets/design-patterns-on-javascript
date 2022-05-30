const Iterator = require("./iterator.js")

class ListIterator extends Iterator {
    #aggregate;
    #currentIndex;

    moveNext() {
        if (this.#currentIndex + 1 < this.#aggregate.count()) {
            this.#currentIndex++;
            return true;
        }

        return false;
	}

    getCurrent() {
        return this.#aggregate.get(this.#currentIndex);
    }

    constructor(aggregate) {
        super();
        this.#aggregate = aggregate;
        this.#currentIndex = -1;
    }
}

module.exports = ListIterator;