var baController = require('../controllers/ba.controller');

var baRouter = require('express').Router();

baRouter.route('/')
    .get(baController.getAll)
    // .post(baController.create)


baRouter.route('/:id')
    .get(baController.getById)
    // .put(baController.update)
    // .delete(baController.delete)

baRouter.route('/author/:id')
    .get(baController.getByAuthor)

module.exports = baRouter;