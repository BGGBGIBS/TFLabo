var elController = require('../controllers/el.controller');

var elRouter = require('express').Router();
const pagination = require('../middlewares/pagination.middleware');


elRouter.route('/')
    .get(pagination( { defaultLimit : 30, maxLimit : 200 }),elController.getAll)
    .post(elController.create)


elRouter.route('/:id')
    .get(elController.getById)
    // .put(elController.update)
    // .delete(elController.delete)

module.exports = elRouter;