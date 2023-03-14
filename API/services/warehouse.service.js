var WarehouseDTO = require('../dto/warehouse.dto');

var db = require('../models');

var warehouseService = {
    getAll : async() => {
        return await db.Warehouse.findAll();
    },
    getById : async(id) => {
        return await db.Warehouse.findByPk(id);
    }
    
}

module.exports = warehouseService;