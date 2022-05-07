const { database } = require('../database/config')

const getUserQuery = async (uEmail) => {

    const getUserQuery = `SELECT * FROM users WHERE email = '${uEmail}'`;

    const [userData] = await database.query(getUserQuery).catch(err => { throw err });

    return userData;
}

const insertUserQuery = async (userData) => {

    const { email, name, address, phone, password } = userData;

    const userEmailQuery = `SELECT email FROM users WHERE email = '${email}'`;

    const newUserQuery = `INSERT INTO users (email, name, address, phone, password) VALUES ('${email}', '${name}', '${address}', '${phone}', '${password}')`;

    const [exist] = await database.query(userEmailQuery).catch(err => { throw err });

    console.log(exist)

    if (exist) {

        throw console.log('ya existe un usuario con ese email')

    } else {

        database.query(newUserQuery).catch(err => { throw err })
        return console.log('Usuario ingresado con éxito');
    }
}

module.exports = {
    getUserQuery,
    insertUserQuery
}