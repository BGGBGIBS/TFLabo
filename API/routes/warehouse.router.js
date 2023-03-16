var warehouseController = require('../controllers/warehouse.controller');

var warehouseRouter = require('express').Router();

warehouseRouter.route('/')
    .get(warehouseController.getAll)
    .post(warehouseController.create)


warehouseRouter.route('/:id')
    .get(warehouseController.getById)
    // .put(warehouseController.update)
    // .delete(warehouseController.delete)

module.exports = warehouseRouter;