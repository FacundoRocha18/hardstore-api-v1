/* 
    Categories routes
    host + /api/categories
*/

const { getCategories } = require('../controllers/categories')

const { Router } = require('express');
const router = Router();

router.get('/', getCategories);

router.get('/test', (req, res) => {
	res.send('Ruta funcional')
});

module.exports = router;