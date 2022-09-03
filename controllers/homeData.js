const { request, response } = require('express');

const { getProducts } = require('../database/products');
const { getCats } = require('../database/categories');

const sendHomeData = async (req = request, res = response) => {
    
    const products = await getProducts();
    const categories = await getCats();

    console.log(categories)

    res.send({
        ok: true,
        msg: 'Homepage Data',
        data: {
            products: products,
            categories: categories
        }
    });

}

module.exports = {
    sendHomeData
}