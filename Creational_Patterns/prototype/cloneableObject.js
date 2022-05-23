class CloneableObject {

    _internalTitle; 
    _internalData;
    
    getTitle() {
        return this._internalTitle;
    }

    getData() {
        return this._internalData;
    }

    clone() {
        var clone = new CloneableObject(this._internalTitle);
        clone._internalData = this._internalData;
        return clone;
    }

    constructor(title) {
        this._internalTitle = title;
        this._internalData = Math.random();
    }
}

module.exports = CloneableObject;