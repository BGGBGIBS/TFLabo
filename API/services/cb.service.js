var cbDTO = require('../dto/cb.dto');

var db = require('../models');

var cbService = {
    getAll : async() => {
        return await db.Cb.findAll();
    },
    getById : async(id) => {
        return await db.Cb.findByPk(id);
    }
    
}

module.exports = cbService;