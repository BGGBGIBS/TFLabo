var BaDTO = require('../dto/ba.dto');
const { sequelize } = require('../models');

var db = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var baService = {
    getAll : async() => {
        return await models.ba.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const ba = await models.ba.findByPk(id); 
        console.log(ba);
        return ba ? new BaDTO(ba) : null; 
    }
    
}

module.exports = baService;