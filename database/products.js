const { database } = require('../database/config');


const getProducts = async () => {

    const getProductsQuery = 'SELECT * FROM `products`';

    const products = await database.query(getProductsQuery).catch(err => {throw err});

    return products;
    
};

module.exports = {
    getProducts
}
