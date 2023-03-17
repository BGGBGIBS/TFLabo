var inventoryController = require('../controllers/inventory.controller');

var inventoryRouter = require('express').Router();

// inventoryRouter.route('/')
//     .get(inventoryController.getAll)
//     .post(inventoryController.create)

inventoryRouter.route('/:id')
    .get(inventoryController.getByLibrary)

module.exports = inventoryRouter;