var ebController = require('../controllers/eb.controller');

var ebRouter = require('express').Router();

ebRouter.route('/')
    .get(ebController.getAll)
    // .post(ebController.create)


ebRouter.route('/:id')
    .get(ebController.getById)
    // .put(ebController.update)
    // .delete(ebController.delete)

module.exports = ebRouter;