var AuthorDTO = require('../dto/author.dto.js');

const { sequelize } = require('../models');
// var initModels = require('../models/init-models');
// var models = initModels(sequelize);
var db = require('../models');

var authorService = {
    getAll : async(offset, limit) => {
        // return await db.Author.findAll();
        const { rows, count } = await db.Author.findAndCountAll({
            distinct : true,
            offset : offset, //offset : 12 ou offset : offset -> simplifé en offset
            limit : limit,
        });
        return {
            authors : rows.map(book => new AuthorDTO(book)),
            count
        } 
    },
    getById : async(id) => {
        console.log(id);
        const author = await db.Author.findByPk(id); 
        console.log(author);
        return author ? new AuthorDTO(author) : null; 
    },
    create : async(toAdd) => {
        const newAuthor = await db.Author.create(toAdd);

        return newAuthor ? new AuthorDTO(newAuthor) : null;
    }   
}

module.exports = authorService;