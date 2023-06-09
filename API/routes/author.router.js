var authorController = require('../controllers/author.controller');
const authJwt = require('../middlewares/auth.jwt.middleware');
const pagination = require('../middlewares/pagination.middleware');

var authorRouter = require('express').Router();

authorRouter.route('/')
    .get(pagination({ defaultLimit : 30, maxLimit : 200 }) ,  authorController.getAll)
    .post(authJwt() ,authorController.create)


authorRouter.route('/:id')
    .get(authorController.getById)
    // .put(authorController.update)
    // .delete(authorController.delete)

module.exports = authorRouter;