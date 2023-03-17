var bookDTO = require('../dto/book.dto');
const { sequelize } = require('../models');

var db = require('../models');

var bookService = {
    getAll : async() => {
        return await db.Book.findAll();
    },
    getById : async(id) => {
        return await db.Book.findByPk(id);
    }
}

module.exports = bookService;