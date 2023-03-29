var basketController = require('../controllers/basket.controller');

var basketRouter = require('express').Router();
var pagination = require('../middlewares/pagination.middleware');

basketRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }), basketController.getAll)
    .post(basketController.create)


basketRouter.route('/:id')
    .get(basketController.getById)
    // .put(basketController.update)
    // .delete(basketController.delete)

module.exports = basketRouter;