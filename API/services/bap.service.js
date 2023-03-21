var bapDTO = require('../dto/bap.dto');

var db = require('../models');

var bapService = {
    getAll : async() => {
        return await db.Bap.findAll();
    },
    getById : async(id) => {
        return await db.Bap.findByPk(id);
    },
    getByAuthor : async(authorId) => {
        // const author = await db.Author.findByPk(authorId);
        // if (!author) {
        //     throw new Error('Author not found');
        // }
        const books = await db.Book.findAll(
            {
            include: [
            {
                model: db.Author,
                where:{
                    author_id : authorId,
                }
            }
            ]
        }
        );
        return books;
    }
    
}

module.exports = bapService;