/* 
    Categories routes
    host + /api/categories
*/

const { getCategories } = require('../controllers/categories')

const { Router } = require('express');
const router = Router();

router.get('/', getCategories);

module.exports = router;