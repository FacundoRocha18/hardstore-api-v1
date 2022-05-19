const { database } = require('../database/config');


const getCats = async () => {

    const getCatsQuery = 'SELECT * FROM `categories`';

    const categories = await database.query(getCatsQuery).catch(err => {throw err});

    console.log(categories)

    return categories;
    
};

module.exports = {
    getCats
}