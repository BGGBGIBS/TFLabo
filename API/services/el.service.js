var elDTO = require('../dto/el.dto');

var db = require('../models');

var elService = {
    getAll : async() => {
        return await db.el.findAll();
    },
    getById : async(id) => {
        return await db.el.findByPk(id);
    }
    
}

module.exports = elService;