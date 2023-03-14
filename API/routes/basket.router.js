var basketController = require('../controllers/basket.controller');

var basketRouter = require('express').Router();

basketRouter.route('/')
    .get(basketController.getAll)
    // .post(basketController.create)


basketRouter.route('/:id')
    .get(basketController.getById)
    // .put(basketController.update)
    // .delete(basketController.delete)

module.exports = basketRouter;