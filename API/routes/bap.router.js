var bapController = require('../controllers/bap.controller');

var bapRouter = require('express').Router();

bapRouter.route('/')
    .get(bapController.getAll)
    // .post(bapController.create)


bapRouter.route('/:id')
    .get(bapController.getById)
    // .put(bapController.update)
    // .delete(bapController.delete)

module.exports = bapRouter;