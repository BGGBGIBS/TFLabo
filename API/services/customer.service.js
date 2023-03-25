var db = require('../models');

var customerService = {
    getAll : async() => {
        return await db.Customer.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const customer = await db.Customer.findByPk(id); 
        console.log(customer);
        return customer ? new CustomerDTO(customer) : null; 
    }
    
}

module.exports = customerService;