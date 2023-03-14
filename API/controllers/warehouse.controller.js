var { Request, Response } = require('express');
var warehouseService = require('../services/warehouse.service');


var warehouseController = {
    getAll : async (req,res) => {
        res.status(200).json( await warehouseService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await warehouseService.getById(req));
    }
}

module.exports = warehouseController;