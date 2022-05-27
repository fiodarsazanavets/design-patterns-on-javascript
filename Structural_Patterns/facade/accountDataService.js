class AccountDataService {

    #accounts;

    getAccounts() {

        return this.#accounts;
    }

    constructor() {
        this.#accounts = [];
        this.#accounts.push({ id: 1, name: 'John Smith'});
        this.#accounts.push({ id: 2, name: 'Jane Doe'});
        this.#accounts.push({ id: 3, name: 'Laurence Newport'});
        this.#accounts.push({ id: 4, name: 'David Fisher'});
    }
}

module.exports = AccountDataService;