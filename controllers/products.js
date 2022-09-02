const { request, response } = require('express');
const { newProduct } = require('../database/products');

const createProduct = async (req = request, res = response) => {

    const data = req.body;

    const { name, sku } = data;
    console.log(name, sku)

    if ( !data ) {
        return res.send({
            ok: false,
            message: 'Los datos del producto están vacíos.'
        })
    }

    try {
        res.send({
            ok: true,
            message: 'Producto ingresado con éxito.'
        })
    } catch (error) {
        res.sendStatus(500)
    }

}

module.exports = {
    createProduct
}