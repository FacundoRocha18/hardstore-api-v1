/* 
    Auth routes
    host + /api/auth

*/
const { createUser, onAuth, renewToken } = require('../controllers/auth');
const { onLogin } = require('../controllers/employeeAuth');


const { Router } = require('express');

const router = Router();


router.post('/register/new', createUser);

router.post('/login', onAuth)

router.post('/employees/login', onLogin)

router.get('/renew', renewToken);


module.exports = router;