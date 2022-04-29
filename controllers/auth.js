const {request, response} = require('express');
const { userQuery } = require('../database/users');


const createUser = (req, res = response) => {

    let userData = req.body;
    console.log(req.body);

    res.json({
        ok: true,
        msg: 'register',
        user: userData
    });

};

const getUser = async (req, res = response) => {

    const uid = req.query.uid;
    const upass = req.query.upassword;

    try {

        const { user_id, user_password } = await userQuery(uid);

        if (uid === user_id && upass === user_password) {

            const randomToken = (length = 24) => {
    
                return Math.random().toString(16).substring(2, length);
            };
    
            res.send({
                token: randomToken()
            })
        }

    } catch (error) {
        res.status(404).send('Sorry, can´t find that');
    }

}

const renewToken = (req, res = response) => {

    res.send({
        ok: true,
        token: 'token123'
    });

};

module.exports = {
    createUser,
    getUser,
    renewToken
}