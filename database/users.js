const { database } = require('../database/config')
const bcrypt = require('bcrypt');

const getUserQuery = async (uEmail) => {

    const getUserQuery = `SELECT email, password, full_name FROM customers WHERE email = '${uEmail}'`;

    let userData;
    try {
        [userData] = await database.query(getUserQuery).catch(err => { throw err });
        console.log(userData);
    } catch (error) {
        return console.log('Ocurrió un error' + error);
    }


    return userData;
}

const insertUserQuery = async (userData) => {

    const { email, name, address, phone, password } = userData;

    try {
        const hashedPwd = await bcrypt.hash(password, 10)

        const userEmailQuery = `SELECT email FROM customers WHERE email = '${email}'`;

        const newUserQuery = `INSERT INTO customers (email, password, full_name, default_shipping_address, phone) VALUES ('${email}', '${hashedPwd}','${name}', '${address}', '${phone}')`;

        const [exists] = await database.query(userEmailQuery).catch(err => { throw err });

        if (exists) {

            throw console.log('ya existe un usuario con ese email')

        } else {

            database.query(newUserQuery).catch(err => { throw err })
            return console.log('Usuario ingresado con éxito');
        }
    } catch (error) {
        return console.log('Ocurrió un error' + error);
    }

}

module.exports = {
    getUserQuery,
    insertUserQuery
}