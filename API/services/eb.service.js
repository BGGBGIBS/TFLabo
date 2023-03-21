var ebDTO = require('../dto/eb.dto');

var db = require('../models');

var ebService = {
    getAll : async() => {
        return await db.eb.findAll();
    },
    getById : async(id) => {
        return await db.eb.findByPk(id);
    }
    
}

module.exports = ebService;