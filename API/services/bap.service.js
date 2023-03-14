var bapDTO = require('../dto/bap.dto');

var db = require('../models');

var bapService = {
    getAll : async() => {
        return await db.Bap.findAll();
    },
    getById : async(id) => {
        return await db.Bap.findByPk(id);
    }
    
}

module.exports = bapService;