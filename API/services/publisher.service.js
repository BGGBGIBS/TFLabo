var PublisherDTO = require('../dto/publisher.dto');

var db = require('../models');

var publisherService = {
    getAll : async() => {
        return await db.Publisher.findAll();
    },
    getById : async(id) => {
        console.log("Publisher ID:", id);
        const publisher = await db.Publisher.findByPk(id); 
        console.log(publisher);
        return publisher ? new PublisherDTO(publisher) : null; 
    }
    
}

module.exports = publisherService;