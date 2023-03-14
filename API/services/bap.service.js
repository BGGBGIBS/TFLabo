var bapDTO = require('../dto/bap.dto');

var db = require('../models');

var bapService = {
    getAll : async() => {
        return await db.bap.findAll();
    },
    getById : async(id) => {
        return await db.bap.findByPk(id);
    }
    
}

module.exports = bapService;