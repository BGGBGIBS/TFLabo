var customerDTO = require('../dto/customer.dto');

var db = require('../models');

var customerService = {
    getAll : async() => {
        return await db.customer.findAll();
    },
    getById : async(id) => {
        return await db.customer.findByPk(id);
    }
    
}

module.exports = customerService;