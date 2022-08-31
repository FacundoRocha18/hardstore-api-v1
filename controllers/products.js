const { request, response } = require('express');
const { newProduct } = require('../database/products');

const createProduct = async (req = request, res = response) => {

    const data = req.body;

    if ( data.length === 0 ) {
        return res.send({
            ok: false,
            message: 'Los datos del producto están vacíos.'
        })
    }

    try {
        console.log(data)
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