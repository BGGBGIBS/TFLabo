var publisherDTO = require('../dto/publisher.dto');

var db = require('../models');

var publisherService = {
    getAll : async() => {
        return await db.publisher.findAll();
    },
    getById : async(id) => {
        return await db.publisher.findByPk(id);
    }
    
}

module.exports = publisherService;