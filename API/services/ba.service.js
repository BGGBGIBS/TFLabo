var baDTO = require('../dto/ba.dto');

var db = require('../models');

var baService = {
    getAll : async() => {
        return await db.ba.findAll();
    },
    getById : async(id) => {
        return await db.ba.findByPk(id);
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

module.exports = baService;