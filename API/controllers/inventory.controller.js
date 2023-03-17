var { Request, Response } = require('express');
var inventoryService = require('../services/inventory.service');


var inventoryController = {
    // getAll : async (req,res) => {
    //     res.status(200).json( await inventoryService.getAll());
    // },
    // getById : async (req,res) => {
    //     const inventory = await inventoryService.getById(req.params.id);
    //     if(!inventory) {
    //         res.sendStatus(404);
    //         return;
    //     }
    //     res.status(200).json(inventory);
    //     // res.status(200).json( await inventoryService.getById(req));
    // },
    getByLibrary : async (req,res) => {
        const inventory = await inventoryService.getAvailableBooks(req.params.id);
        if(!inventory){
            res.status(404);
            return;
        };
        res.status(200).json(inventory);
    }
}

module.exports = inventoryController;