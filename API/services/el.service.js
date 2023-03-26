var ElDTO = require('../dto/el.dto');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var elService = {
    getAll : async() => {
        return await models.el.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const el = await models.el.findByPk(id); 
        console.log(el);
        return el ? new ElDTO(el) : null; 
    },
    create : async(toAdd) => {
        const newO = await models.el.create(toAdd);

        return newO ? new ElDTO(newO) : null;
    }
    
}

module.exports = elService;