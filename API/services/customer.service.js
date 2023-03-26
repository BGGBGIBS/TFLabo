var CustomerDTO = require('../dto/customer.dto')

const { sequelize } = require('../models');
var initModels = require('../models/init-models');
var models = initModels(sequelize);

var customerService = {
    getAll : async() => {
        return await models.customer.findAll();
    },
    getById : async(id) => {
        console.log(id);
        const customer = await models.customer.findByPk(id); 
        console.log(customer);
        return customer ? new CustomerDTO(customer) : null; 
    },
    create : async(toAdd) => {
        const newCustomer = await models.customer.create(toAdd);

        return newCustomer ? new CustomerDTO(newCustomer) : null;
    }
    
}

module.exports = customerService;