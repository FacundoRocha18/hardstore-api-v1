/* 
    Auth routes
    host + /api/auth

*/
const { createUser, onAuth, renewToken } = require('../controllers/auth');

const { Router } = require('express');

const router = Router();


router.post('/register/new', createUser);

router.post('/login', onAuth)


router.get('/renew', renewToken);


module.exports = router;