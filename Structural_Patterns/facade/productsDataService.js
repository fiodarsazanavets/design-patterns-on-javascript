class ProductsDataService {
    
    #productLists;

    getProductsForCategory(categoryId) {
        return this.#productLists[categoryId];
    }

    constructor() {
        this.#productLists = {
            1: [{
                    name: 'Product 1',
                    price: 9.99
                },{
                    name: 'Product 2',
                    price: 19.99
                }
            ],
            2: [{
                    name: 'Product 1',
                    price: 9.99
                },{
                    name: 'Product 2',
                    price: 19.99
                }
            ],
        };
    }
}

module.exports = ProductsDataService;