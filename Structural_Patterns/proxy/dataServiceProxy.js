const DataServiceInterface = require('./dataServiceInterface.js');
const DataService = require('./dataService.js');

class DataServiceProxy extends DataServiceInterface {

    #dataService = new DataService();
    #localCache = null;

    async getData() {
        console.log(`${new Date()} - Started data query.`);

        if (!this.#localCache)
            this.#localCache = await this.#dataService.getData();

        console.log(`${new Date()} - Data has been retrieved.`);
        return this.#localCache;
    }

    insertData(item) {
        this.#localCache = null;
        this.#dataService.insertData(item);
    }
}

module.exports = DataServiceProxy;