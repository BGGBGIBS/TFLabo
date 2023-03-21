var cbController = require('../controllers/cb.controller');

var cbRouter = require('express').Router();

cbRouter.route('/')
    .get(cbController.getAll)
    // .post(cbController.create)


cbRouter.route('/:id')
    .get(cbController.getById)
    // .put(cbController.update)
    // .delete(cbController.delete)

module.exports = cbRouter;