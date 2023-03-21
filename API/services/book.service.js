var bookDTO = require('../dto/book.dto');
const { sequelize } = require('../models');

var db = require('../models');
const author = require('../models/author');

var bookService = {
    getAll : async() => {
        return await db.Book.findAll();
    },
    getById : async(id) => {
        return await db.Book.findByPk(id);
    },
    getByAuthor : async(authorId) => {
        // const author = await db.Author.findByPk(id);
        // if (!author) {
        //     throw new Error('Author not found');
        // }
        const books = await db.Book.findAll(
            {
                include: [
                    db.Author]
                
                    // where: 
                    // {
                    //     author_id: authorId
                    // },
                
            
        }
        );
        return books;
    }
}

module.exports = bookService;