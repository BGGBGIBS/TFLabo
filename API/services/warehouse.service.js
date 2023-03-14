var WarehouseDTO = require('../dto/warehouse.dto');

var db = require('../models');

var warehouseService = {
    getAll : async() => {
        return await db.warehouse.findAll();
    },
    getById : async(id) => {
        return await db.warehouse.findByPk(id);
    }
    
}

module.exports = warehouseService;