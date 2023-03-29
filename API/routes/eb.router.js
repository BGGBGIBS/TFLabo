var ebController = require('../controllers/eb.controller');
const authJwt = require('../middlewares/auth.jwt.middleware');

var ebRouter = require('express').Router();
const pagination = require('../middlewares/pagination.middleware');


ebRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }),ebController.getAll)
    .post(authJwt(),ebController.create)


ebRouter.route('/:id')
    .get(ebController.getById)
    // .put(ebController.update)
    // .delete(ebController.delete)

module.exports = ebRouter;