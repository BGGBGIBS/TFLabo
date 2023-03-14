var bwController = require('../controllers/bw.controller');

var bwRouter = require('express').Router();

bwRouter.route('/')
    .get(bwController.getAll)
    // .post(bwController.create)


bwRouter.route('/:id')
    .get(bwController.getById)
    // .put(bwController.update)
    // .delete(bwController.delete)

module.exports = bwRouter;