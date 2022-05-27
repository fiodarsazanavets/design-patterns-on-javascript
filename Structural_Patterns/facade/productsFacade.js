class ProductFacade {
    #accountCategoryService;
    #accountDataService;
    #productDataService;

    getProductListForAccount(name)
    {
        var accounts = this.#accountDataService.getAccounts();
        var accountId = 0;

        for (var i = 0; i < accounts.length; i++) {

            if (accounts[i].name === name) {
                accountId = accounts[i].id;
                break;
            }
        }

        if (accountId == 0)
            return [];

        var accountCategory = this.#accountCategoryService.getCategory(accountId);

        return this.#productDataService.getProductsForCategory(accountCategory.id);
    }

    constructor(accountCategoryService,
        accountDataService,
        productDataService) {
        this.#accountCategoryService = accountCategoryService;
        this.#accountDataService = accountDataService;
        this.#productDataService = productDataService;
    }
}

module.exports = ProductFacade;