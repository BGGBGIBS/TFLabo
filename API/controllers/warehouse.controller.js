var { Request, Response } = require('express');
var warehouseService = require('../services/warehouse.service');


var warehouseController = {
    getAll : async (req,res) => {
        res.status(200).json( await warehouseService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await warehouseService.getById(req));
    },
    create : async (req, res) => {
        const warehouse = await warehouseService.create(req.body);
        res.location('/warehouse/'+ warehouse.warehouse_id);
        res.status(201).json(new SuccessResponse(warehouse, 201));
    }
}

module.exports = warehouseController;