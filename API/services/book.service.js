var BookDTO = require('../dto/book.dto');

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var bookService = {
    getAll : async() => {
        return await models.book.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const book = await models.book.findByPk(id); 
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
    },
    create : async(toAdd) => {
        const newBook = await models.book.create(toAdd);

        return newBook ? new BookDTO(newBook) : null;
    }
}

module.exports = bookService;