var BasketDTO = require('../dto/basket.dto');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var basketService = {
    getAll : async() => {
        return await models.basket.findAll();
    },
    getById : async(id) => {
        console.log("Basket ID : ", id);
        const basket = await models.basket.findByPk(id); 
        console.log(basket);
        return basket ? new BasketDTO(basket) : null; 
    },
    create : async(toAdd) => {
        const newBasket = await models.basket.create(toAdd);

        return newBasket ? new BasketDTO(newBasket) : null;
    }
    
}

module.exports = basketService;