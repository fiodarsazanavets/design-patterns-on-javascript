const AccountCategoryService = require('./accountCategoryService.js');
const AccountDataService = require('./accountDataService.js');
const ProductsDataService = require('./productsDataService.js');
const ProductsFacade = require('./productsFacade.js');

var facade = new ProductsFacade(new AccountCategoryService(),
    new AccountDataService(),
    new ProductsDataService());

var productList = facade.getProductListForAccount('John Smith');

for (var i = 0; i < productList.length; i++)
{
    console.log(`Product name: ${productList[i].name}`);
    console.log(`Product price: ${productList[i].price}`);
}