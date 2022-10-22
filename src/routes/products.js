/* 
    Products routes
    host + /api/products
*/

const createProduct = require('../controllers/products');
const { getProducts } = require('../database/products');
const { sendHomeData } = require('../controllers/homeData');

const { Router } = require('express');
const router = Router();

router.get('/getProducts', getProducts);

router.post('/new', createProduct);

router.get('/', sendHomeData);

router.get('/test', (req, res) => {
	res.send('Ruta funcional')
});

module.exports = router;