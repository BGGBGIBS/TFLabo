var AuthorDTO = require('../dto/author.dto.js');

var db = require('../models');

var authorService = {
    getAll : async() => {
        return await db.Author.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const author = await db.Author.findByPk(id); 
        console.log(author);
        return author ? new AuthorDTO(author) : null; 
    }
    
}

module.exports = authorService;