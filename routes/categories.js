/* 
    Categories routes
    host + /api/categories
*/
const { getCats } = require('../database/categories');


const { Router } = require('express');
const router = Router();

router.get('/', getCats);




module.exports = router;