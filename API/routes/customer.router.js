var customerController = require('../controllers/customer.controller');

var customerRouter = require('express').Router();
var pagination = require('../middlewares/pagination.middleware');

customerRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }),customerController.getAll)
    .post(customerController.create)


customerRouter.route('/:id')
    .get(customerController.getById)
    // .put(customerController.update)
    // .delete(customerController.delete)

module.exports = customerRouter;