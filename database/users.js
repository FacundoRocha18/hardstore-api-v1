const { database } = require('../database/config')
const bcrypt = require('bcrypt');
const res = require('express/lib/response');

const getUserQuery = async (uEmail) => {

    const getUserQuery = `SELECT email, password, full_name FROM customers WHERE email = '${uEmail}'`;

    let message, userData;

    try {

        [userData] = await database.query(getUserQuery)
            .catch(err => { throw err });


    } catch (error) {

        return console.log('Ocurrió un error' + error);
    }


    return userData, message;
}

const insertUserQuery = async (userData) => {

    const { email, name, address, phone, password } = userData;

    let message;

    try {
        const hashedPwd = await bcrypt.hash(password, 10)

        const userEmailQuery = `SELECT email FROM customers WHERE email = '${email}'`;

        const newUserQuery = `INSERT INTO customers (email, password, full_name, default_shipping_address, phone) VALUES ('${email}', '${hashedPwd}','${name}', '${address}', '${phone}')`;

        const [exists] = await database.query(userEmailQuery).catch(err => { throw err });

        if (exists) {

            return message = 'Ya existe un usuario con ese email';

        }

        database.query(newUserQuery).catch(err => { throw err })
        message = 'Usuario ingresado con éxito';

    } catch (error) {
        return message = 'Ocurrió un error, por favor intente nuevamente. Si el error persiste contacte con el sector de atención al cliente';
    }

    return message;
}

module.exports = {
    getUserQuery,
    insertUserQuery
}