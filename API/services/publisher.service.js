var PublisherDTO = require('../dto/publisher.dto');

const { sequelize } = require('../models');
// var initModels = require('../models/init-models');
// var models = initModels(sequelize);
var db = require('../models');


var publisherService = {
    getAll : async(offset, limit) => {
        const { rows, count } = await db.Publisher.findAndCountAll({
            distinct : true,
            offset : offset,
            limit : limit,
        });
        return {
            publishers : rows.map(publisher => new PublisherDTO(publisher)),
            count
        }     },
    getById : async(id) => {
        console.log("Publisher ID:", id);
        const publisher = await db.Publisher.findByPk(id); 
        console.log(publisher);
        return publisher ? new PublisherDTO(publisher) : null; 
    },
    create : async(toAdd) => {
        const newO = await db.Publisher.create(toAdd);

        return newO ? new PublisherDTO(newO) : null;
    }
}

module.exports = publisherService;