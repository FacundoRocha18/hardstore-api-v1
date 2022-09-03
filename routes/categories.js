/* 
    Categories routes
    host + /api/categories
*/

const { getCategories } = require('../controllers/categories')

const { Router } = require('express');
const router = Router();

router.use('/', getCategories);

module.exports = router;