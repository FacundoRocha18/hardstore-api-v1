const { request, response } = require('express');
const { getCats } = require('../database/categories');


const getCategories = async (req = request, res = response) => {

    const categories = await getCats();

    console.log(categories)

    if (!categories) {
        return res.json({
            ok: false,
            message: 'No se encontraron categorías'
        })
    }

    res.json({
        ok: true,
        message: 'Categorías: ',
        data: categories
    })

}

module.exports = {
    getCategories
}