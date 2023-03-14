var publisherDTO = require('../dto/publisher.dto');

var db = require('../models');

var publisherService = {
    getAll : async() => {
        return await db.Publisher.findAll();
    },
    getById : async(id) => {
        return await db.Publisher.findByPk(id);
    }
    
}

module.exports = publisherService;