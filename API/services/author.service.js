var authorDTO = require('../dto/author.dto');

var db = require('../models');

var authorService = {
    getAll : async() => {
        return await db.Author.findAll();
    },
    getById : async(id) => {
        // return await db.Author.findByPk(id);
        const warehouse = await db.Warehouse.findByPk(id); 

        return warehouse ? new WarehouseDTO(warehouse) : null; 
    }
    
}

module.exports = authorService;