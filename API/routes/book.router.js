var bookController = require('../controllers/book.controller');

var bookRouter = require('express').Router();

bookRouter.route('/')
    .get(bookController.getAll)
    .post(bookController.create)


bookRouter.route('/:id')
    .get(bookController.getById)
    // .put(bookController.update)
    // .delete(bookController.delete)

bookRouter.route('/author/:id')
    .get(bookController.getByAuthor)

module.exports = bookRouter;