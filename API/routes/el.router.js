var elController = require('../controllers/el.controller');

var elRouter = require('express').Router();

elRouter.route('/')
    .get(elController.getAll)
    // .post(elController.create)


elRouter.route('/:id')
    .get(elController.getById)
    // .put(elController.update)
    // .delete(elController.delete)

module.exports = elRouter;