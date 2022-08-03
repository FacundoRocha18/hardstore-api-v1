const { database } = require('../database/config')
const bcrypt = require('bcrypt');


const getEmployee = async (id) => { 
    
    const getData = `SELECT employee_id, name, employee_pin FROM employees WHERE employee_id = '${id}'`;

    let data = [];

    try { [data] = await database.query(getData).catch(err => { throw err }); }

    catch (error) { return console.log('Ocurrió un error' + error); }

    return data;

}

module.exports = {
    getEmployee,
}