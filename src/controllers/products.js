const { request, response } = require('express');
const { newProduct } = require('../database/products');

const createProduct = async (req = request, res = response) => {

	const data = req.body;

	console.log(data)

	if (!data) {
		return res.send({
			ok: false,
			title: 'Hubo un problema al ingresar el producto',
			message: 'Los datos del producto están vacíos.'
		})
	}

	try {
		newProduct(data)
		console.log('done ' + new Date)
		res.send({
			ok: true,
			title: 'Se ingresó con éxito',
			message: 'Producto guardado en la base de datos'
		})
	} catch (error) {
		res.sendStatus(500)
	}

}

module.exports = createProduct