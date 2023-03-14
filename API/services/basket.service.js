var basketDTO = require('../dto/basket.dto');

var db = require('../models');

var basketService = {
    getAll : async() => {
        return await db.basket.findAll();
    },
    getById : async(id) => {
        return await db.basket.findByPk(id);
    }
    
}

module.exports = basketService;