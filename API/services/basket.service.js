var BasketDTO = require('../dto/basket.dto');

var db = require('../models');

var basketService = {
    getAll : async() => {
        return await db.Basket.findAll();
    },
    getById : async(id) => {
        console.log("Basket ID : ", id);
        const basket = await db.Basket.findByPk(id); 
        console.log(basket);
        return basket ? new BasketDTO(basket) : null; 
    }
    
}

module.exports = basketService;