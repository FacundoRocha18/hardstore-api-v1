const { response, request } = require('express');
const util = require("util"); 
const mysql = require('mysql2');
require('dotenv').config();


/* Creating database connection */

const database = new mysql.createConnection({
    host: 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'hardstore_client',
    password: process.env.DB_PWD || 'HSClient54591334!',
    database: process.env.DB || 'hardstore'
});

// promise wrapper to enable async await with MYSQL
database.query = util.promisify(database.query).bind(database);



const addProduct = async(req = request, res = response) => {

    const productData = req.body;
        
    let { product_name, product_image: product_image_path, product_price, product_description, product_stock } = productData;

    const insertProductQuery = 'INSERT INTO `products` (`product_id`, `product_name`, `product_image_path`, `product_price`, `product_description`, `product_stock`, `product_added_date`) VALUES ' + 
    `(NULL, '${product_name}', 'frontend/img/${product_image_path}', '${product_price}', '${product_description}', '${product_stock}', current_timestamp())` + ';';

    const queryInfo = await database.query(insertProductQuery).catch(err => {throw err});

    res.json({
        ok: true,
        msg: 'Add product data',
        insertQueryInfo: queryInfo,
        ProductData: productData
    }).send();

};

module.exports = {
    database,
    addProduct
}
