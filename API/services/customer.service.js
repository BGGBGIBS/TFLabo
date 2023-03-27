var CustomerDTO = require('../dto/customer.dto')

const { sequelize } = require('../models');
// var initModels = require('../models/init-models');
// var models = initModels(sequelize);
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
    },
    create : async(toAdd) => {
        const newCustomer = await db.Customer.create(toAdd);

        return newCustomer ? new CustomerDTO(newCustomer) : null;
    }
    
}

module.exports = customerService;