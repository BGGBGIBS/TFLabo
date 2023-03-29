var libraryController = require('../controllers/library.controller');
const authJwt = require('../middlewares/auth.jwt.middleware');

var libraryRouter = require('express').Router();
const pagination = require('../middlewares/pagination.middleware');


libraryRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }),libraryController.getAll)
    .post(authJwt(),libraryController.create)


libraryRouter.route('/:id')
    .get(libraryController.getById)
    // .put(libraryController.update)
    // .delete(libraryController.delete)

module.exports = libraryRouter;