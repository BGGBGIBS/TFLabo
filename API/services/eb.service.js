var EbDTO = require('../dto/eb.dto');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var ebService = {
    getAll : async() => {
        return await models.eb.findAll();
    },
    getById : async(id) => {
        console.log(" EB ID : ", id);
        const eb = await models.eb.findByPk(id); 
        console.log(eb);
        return eb ? new EbDTO(eb) : null; 
    },
    create : async(toAdd) => {
        const newEb = await models.eb.create(toAdd);

        return newEb ? new EbDTO(newEb) : null;
    }
    
}

module.exports = ebService;