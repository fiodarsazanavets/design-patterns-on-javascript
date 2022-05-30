const Iterator = require("./iterator.js")

class SortedBinaryTreeIterator extends Iterator {
    
    #aggregate;
    #current;

    getCurrent() {
        return this.#current.value;
    }

    moveNext() {
        if (!this.#current) {
            this.#current = this.#aggregate.getFirst();
            return true;
        }

        if (this.#current.right) {
            this.#current = this.#current.right;

            while (true) {
                if (!this.#current.left) {
                    break;
                }

                this.#current = this.#current.left;
            }

            return true;
        }
        else {
            var originalValue = this.#current.value;

            while (true) {
                if (this.#current.parent) {
                    this.#current = this.#current.parent;

                    if (this.#current.value > originalValue) {
                        return true;
                    }
                }
                else {
                    return false;
                }
            }
        }
    }

    constructor(aggregate) {
        super();
        this.#aggregate = aggregate;
        this.#current = null;
    }
}

module.exports = SortedBinaryTreeIterator;