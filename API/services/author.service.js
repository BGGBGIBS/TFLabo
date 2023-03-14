var authorDTO = require('../dto/author.dto');

var db = require('../models');

var authorService = {
    getAll : async() => {
        return await db.Author.findAll();
    },
    getById : async(id) => {
        return await db.Author.findByPk(id);
    }
    
}

module.exports = authorService;