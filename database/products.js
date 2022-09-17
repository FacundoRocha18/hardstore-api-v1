const { database } = require('../database/config');


const getProducts = async () => {

    const getProductsQuery = 'SELECT * FROM `products`';

    const products = await database.query(getProductsQuery).catch(err => {throw err});

    return products;
    
};

const newProduct = async (data) => {

    const { name, sku, qty, desc, img, price, cat } = data;

    const query = `INSERT INTO products (sku, product_name, product_image, product_price, product_description, product_stock, product_category_name) VALUES ('${sku}', '${name}', '${img}', '${price}', '${desc}', '${qty}', '${cat} ')`

    const queryStatus = await database.query(query)

    return queryStatus;
    
}

module.exports = {
    getProducts,
    newProduct
}
