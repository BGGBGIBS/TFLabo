var customerController = require('../controllers/customer.controller');
const authJwt = require('../middlewares/auth.jwt.middleware');

var customerRouter = require('express').Router();
var pagination = require('../middlewares/pagination.middleware');

customerRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }),customerController.getAll)
    .post(authJwt() ,customerController.create)


customerRouter.route('/:id')
    .get(customerController.getById)
    // .put(customerController.update)
    // .delete(customerController.delete)

module.exports = customerRouter;