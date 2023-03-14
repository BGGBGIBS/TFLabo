var customerController = require('../controllers/customer.controller');

var customerRouter = require('express').Router();

customerRouter.route('/')
    .get(customerController.getAll)
    // .post(customerController.create)


customerRouter.route('/:id')
    .get(customerController.getById)
    // .put(customerController.update)
    // .delete(customerController.delete)

module.exports = customerRouter;