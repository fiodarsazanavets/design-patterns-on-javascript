class AccountCategoryService {

    #accountCategories;

    #categories = [{
            id: 1,
            name: 'Buyer'
        },{
            id: 2,
            name: 'Reseller'
        }
    ];

    getCategory(accountId)
    {
        return this.#accountCategories[accountId];
    }

    constructor() {
        this.#accountCategories = {
            1: this.#categories[0],
            2: this.#categories[0],
            3: this.#categories[1],
            4: this.#categories[1]
        };
    }
}

module.exports = AccountCategoryService;