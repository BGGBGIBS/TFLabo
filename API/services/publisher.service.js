var PublisherDTO = require('../dto/publisher.dto');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var publisherService = {
    getAll : async() => {
        return await models.publisher.findAll();
    },
    getById : async(id) => {
        console.log("Publisher ID:", id);
        const publisher = await models.publisher.findByPk(id); 
        console.log(publisher);
        return publisher ? new PublisherDTO(publisher) : null; 
    },
    create : async(toAdd) => {
        const newO = await models.publisher.create(toAdd);

        return newO ? new PublisherDTO(newO) : null;
    }
}

module.exports = publisherService;