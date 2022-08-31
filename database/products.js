const { database } = require('../database/config');


const getProducts = async () => {

    const getProductsQuery = 'SELECT * FROM `products`';

    const products = await database.query(getProductsQuery).catch(err => {throw err});

    return products;
    
};

const newProduct = async (data) => {

    console.log(data)

    const query = 'INSERT INTO products (sku, product_name, product_image, product_price, product_description, product_stock, product_category_id, product_category_name) VALUES ()'
}

module.exports = {
    getProducts,
    newProduct
}
