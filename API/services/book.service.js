var BookDTO = require('../dto/book.dto');
const { sequelize } = require('../models');

var db = require('../models');
const book = require('../models/book');

var bookService = {
    getAll : async() => {
        return await db.Book.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const book = await db.Book.findByPk(id); 
        console.log(book);
        return book ? new BookDTO(book) : null; 
    },
    getByAuthor : async(authorId) => {
        const books = await models.book.findAll({
            include: [
            {
                model: models.author,
                where: {
                    author_id: authorId
                }
            }
            ],
        });
        return books;
    }
}

module.exports = bookService;