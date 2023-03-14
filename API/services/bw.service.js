var bwDTO = require('../dto/bw.dto');

var db = require('../models');

var bwService = {
    getAll : async() => {
        return await db.Bw.findAll();
    },
    getById : async(id) => {
        return await db.Bw.findByPk(id);
    }
    
}

module.exports = bwService;