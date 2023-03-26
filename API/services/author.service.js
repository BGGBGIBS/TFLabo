var AuthorDTO = require('../dto/author.dto.js');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var authorService = {
    getAll : async() => {
        return await models.author.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const author = await models.author.findByPk(id); 
        console.log(author);
        return author ? new AuthorDTO(author) : null; 
    },
    create : async(toAdd) => {
        const newAuthor = await models.author.create(toAdd);

        return newAuthor ? new AuthorDTO(newAuthor) : null;
    }
    
}

module.exports = authorService;