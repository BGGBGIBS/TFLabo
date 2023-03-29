var BookDTO = require('../dto/book.dto');

const { sequelize, Author } = require('../models');
var db = require('../models');

var bookService = {
    getAll : async (offset, limit) => {

        const { rows, count } = await db.Book.findAndCountAll({
            distinct : true,
            offset : offset,
            limit : limit,
        });
        return {
            books : rows.map(book => new BookDTO(book)),
            count
        } 
    },
    getById : async(id) => {
        console.log(id);
        const book = await db.Book.findByPk(id); 
        console.log(book);
        return book ? new BookDTO(book) : null; 
    },
    getByAuthor : async(authorId) => {
        const books = await db.Book.findAll({
            include: [
            {
                model: db.Author,
                where: {
                    author_id: authorId
                }
            }
            ],
        });
        return books;
    },
    create : async(bookToAdd) => {

        const transaction = await db.sequelize.transaction()

        let book;
        try {
            console.log(bookToAdd);
            book = await db.Book.create(bookToAdd, { transaction });
            await book.addAuthors(bookToAdd.authors, { transaction })
            console.log(bookToAdd.authors);
            await transaction.commit();

            console.log(book.book_id);
            const addedbook = await db.Book.findByPk(book.book_id, {
                include: [Author]
            });

            return addedbook ? new BookDTO(addedbook) : null;
        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }
    }
}

module.exports = bookService;