var bwDTO = require('../dto/bw.dto');

var db = require('../models');

var bwService = {
    getAll : async() => {
        return await db.bw.findAll();
    },
    getById : async(id) => {
        return await db.bw.findByPk(id);
    }
    
}

module.exports = bwService;