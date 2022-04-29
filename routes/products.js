/* 
    Products routes
    host + /api/products
*/
const { getProducts } = require('../database/config');


const { Router } = require('express');
const router = Router();

router.get('/getproduct', getProducts);

router.get('/', getProducts);



module.exports = router;