class DataServiceImplementation {
        
    #data;
    
    getData() {
        return this.#data;
    }
    
    insertData(item) {
        this.#data.push(item);
    }

    constructor() {
        this.#data = [];
    }
}

module.exports = DataServiceImplementation;