const DataServiceInterface = require('./dataServiceInterface.js');
const sleep = ms => new Promise(r => setTimeout(r, ms));

class DataService extends DataServiceInterface {

    #data = [];

    async getData() {
        // Simulate long-running process
        await sleep(3000);
        return this.#data;
    }

    insertData(item) {
        this.#data.push(item);
    }
}

module.exports = DataService;