class Component {
    
    _name;

    getName() {
        return this._name;
    }

    display(currentPath) {
        
    }

    constructor(name) {
        this._name = name;
    }
}

module.exports = Component;