const Component = require('./component.js');

class Folder extends Component {
    
    #children;

    display(currentPath) {
        console.log(currentPath + this.getName() + '/');
    }

    add(child) {
        this.#children.push(child);
    }

    displayChildren(path) {
        for (var i = 0; i < this.#children.length; i++) {
            var item = this.#children[i];
            item.display(path + this.getName() + '/');

            if (item instanceof Folder) {
                item.displayChildren(path + this.getName() + '/');
            }
        }
    }

    constructor(name) {
        super(name);
        this.#children = [];
    }
}

module.exports = Folder;