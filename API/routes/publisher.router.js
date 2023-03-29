var publisherController = require('../controllers/publisher.controller');
const authJwt = require('../middlewares/auth.jwt.middleware');

var publisherRouter = require('express').Router();
const pagination = require('../middlewares/pagination.middleware');


publisherRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }),publisherController.getAll)
    .post(authJwt(),publisherController.create)


publisherRouter.route('/:id')
    .get(publisherController.getById)
    // .put(publisherController.update)
    // .delete(publisherController.delete)

module.exports = publisherRouter;