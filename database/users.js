const { database } = require('../database/config')
const bcrypt = require('bcrypt');

const getUserQuery = async (uEmail) => {

    const getUserQuery = `SELECT * FROM users WHERE email = '${uEmail}'`;

    let userData;
    try {
        [userData] = await database.query(getUserQuery).catch(err => { throw err });
    } catch (error) {
        return error;
    }


    return userData;
}

const insertUserQuery = async (userData) => {

    const { email, name, address, phone, password } = userData;

    try {
        const hashedPwd = await bcrypt.hash(password, 10)
        
        const userEmailQuery = `SELECT email FROM users WHERE email = '${email}'`;
    
        const newUserQuery = `INSERT INTO users (email, name, address, phone, password) VALUES ('${email}', '${name}', '${address}', '${phone}', '${hashedPwd}')`;
    
        const [exist] = await database.query(userEmailQuery).catch(err => { throw err });
        
        if (exist) {
    
            throw alert('ya existe un usuario con ese email')
    
        } else {
    
            database.query(newUserQuery).catch(err => { throw err })
            return alert('Usuario ingresado con éxito');
        }
    } catch (error) {

    }

}

module.exports = {
    getUserQuery,
    insertUserQuery
}