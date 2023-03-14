var bookDTO = require('../dto/book.dto');

var db = require('../models');

var bookService = {
    getAll : async() => {
        return await db.book.findAll();
    },
    getById : async(id) => {
        return await db.book.findByPk(id);
    }
    
}

module.exports = bookService;