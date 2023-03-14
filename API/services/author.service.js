var authorDTO = require('../dto/author.dto');

var db = require('../models');

var authorService = {
    getAll : async() => {
        return await db.author.findAll();
    },
    getById : async(id) => {
        return await db.author.findByPk(id);
    }
    
}

module.exports = authorService;