const { database } = require('../database/config');


const getCats = async () => {

    const getCatsQuery = 'SELECT * FROM `categories`';

    const categories = await database.query(getCatsQuery)
        .catch(err => console.log('error', err));

    if (!categories) {
        return false;
    }

    return categories;
};

module.exports = {
    getCats
}