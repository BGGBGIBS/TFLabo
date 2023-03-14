var cbDTO = require('../dto/cb.dto');

var db = require('../models');

var cbService = {
    getAll : async() => {
        return await db.cb.findAll();
    },
    getById : async(id) => {
        return await db.cb.findByPk(id);
    }
    
}

module.exports = cbService;