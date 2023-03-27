var bookController = require('../controllers/book.controller');

var bookRouter = require('express').Router();
var pagination = require('../middlewares/pagination.middleware')

bookRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }), bookController.getAll)
    .post(bookController.create)


bookRouter.route('/:id')
    .get(bookController.getById)
    // .put(bookController.update)
    // .delete(bookController.delete)

bookRouter.route('/author/:id')
    .get(bookController.getByAuthor)

module.exports = bookRouter;