var basketDTO = require('../dto/basket.dto');

var db = require('../models');

var basketService = {
    getAll : async() => {
        return await db.Basket.findAll();
    },
    getById : async(id) => {
        return await db.Basket.findByPk(id);
    }
    
}

module.exports = basketService;