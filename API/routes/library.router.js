var libraryController = require('../controllers/library.controller');

var libraryRouter = require('express').Router();

libraryRouter.route('/')
    .get(libraryController.getAll)
    .post(libraryController.create)


libraryRouter.route('/:id')
    .get(libraryController.getById)
    // .put(libraryController.update)
    // .delete(libraryController.delete)

module.exports = libraryRouter;