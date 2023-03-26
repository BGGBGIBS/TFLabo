var authorController = require('../controllers/author.controller');

var authorRouter = require('express').Router();

authorRouter.route('/')
    .get(authorController.getAll)
    .post(authorController.create)


authorRouter.route('/:id')
    .get(authorController.getById)
    // .put(authorController.update)
    // .delete(authorController.delete)

module.exports = authorRouter;