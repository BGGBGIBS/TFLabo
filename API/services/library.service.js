var LibraryDTO = require('../dto/library.dto');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var LibraryService = {
    getAll : async() => {
        return await models.library.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const library = await models.library.findByPk(id); 
        console.log(library);
        return library ? new LibraryDTO(library) : null; 
    },
    create : async(toAdd) => {
        var library = await models.library.create(toAdd);
        return library ? new LibraryDTO(library) : null;
    }
}

module.exports = LibraryService;