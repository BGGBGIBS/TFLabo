var publisherController = require('../controllers/publisher.controller');

var publisherRouter = require('express').Router();

publisherRouter.route('/')
    .get(publisherController.getAll)
    // .post(publisherController.create)


publisherRouter.route('/:id')
    .get(publisherController.getById)
    // .put(publisherController.update)
    // .delete(publisherController.delete)

module.exports = publisherRouter;