var BasketDTO = require('../dto/basket.dto');

const { sequelize } = require('../models');
// var initModels = require('../models/init-models');
// var models = initModels(sequelize);
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
    },
    create : async(toAdd) => {
        const newBasket = await db.Basket.create(toAdd);

        return newBasket ? new BasketDTO(newBasket) : null;
    }
    
}

module.exports = basketService;