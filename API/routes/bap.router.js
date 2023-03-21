var bapController = require('../controllers/ba.controller');

var bapRouter = require('express').Router();

bapRouter.route('/')
    .get(bapController.getAll)
    // .post(bapController.create)


bapRouter.route('/:id')
    .get(bapController.getById)
    // .put(bapController.update)
    // .delete(bapController.delete)

bapRouter.route('/author/:id')
    .get(bapController.getByAuthor)

module.exports = bapRouter;