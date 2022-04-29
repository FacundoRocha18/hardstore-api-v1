/* 
    Auth routes
    host + /api/auth

*/
const { createUser, getUser, renewToken } = require('../controllers/auth');


const { Router } = require('express');
const router = Router();


router.post('/new', createUser);

router.get('/login', getUser)


router.get('/renew', renewToken);


module.exports = router;