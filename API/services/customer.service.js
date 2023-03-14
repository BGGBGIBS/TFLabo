var customerDTO = require('../dto/customer.dto');

var db = require('../models');

var customerService = {
    getAll : async() => {
        return await db.Customer.findAll();
    },
    getById : async(id) => {
        return await db.Customer.findByPk(id);
    }
    
}

module.exports = customerService;