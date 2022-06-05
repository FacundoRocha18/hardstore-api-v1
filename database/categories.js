const { database } = require('../database/config');


const getCats = async () => {

    const getCatsQuery = 'SELECT * FROM `categories`';

    const categories = await database.query(getCatsQuery).catch(err => {throw err});

    return categories;
    
};

module.exports = {
    getCats
}