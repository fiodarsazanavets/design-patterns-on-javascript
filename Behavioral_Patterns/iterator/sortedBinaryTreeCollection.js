const Aggregate = require("./aggregate.js");
const TreeNode = require('./treeNode.js');
const SortedBinaryTreeIterator = require('./sortedBinaryTreeIterator.js');

class SortedBinaryTreeCollection extends Aggregate {

    #root = null;

    createIterator() {
        return new SortedBinaryTreeIterator(this);
    }

    getFirst() {
        var current = this.#root;

        while (true) {
            if (current != null && current.left != null) {
                current = current.left;
            }
            else {
                return current;
            }
        }
    }

    insert(value)
    {
        var newNode = new TreeNode(value);

        if (!this.#root) {
            this.#root = newNode;
        }
        else {
            var parent = null;
            var temp = this.#root;

            while (true) {
                parent = temp;

                if (value < temp.value)
                {
                    temp = temp.left;

                    if (!temp) {
                        parent.left = newNode;
                        newNode.parent = parent;
                        return;
                    }
                }
                else {
                    temp = temp.right;

                    if (!temp) {
                        parent.right = newNode;
                        newNode.parent = parent;
                        return;
                    }
                }
            }
        }
    }
}

module.exports = SortedBinaryTreeCollection;