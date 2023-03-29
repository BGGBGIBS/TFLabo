var CustomerDTO = require('../dto/customer.dto')

const { sequelize } = require('../models');
// var initModels = require('../models/init-models');
// var models = initModels(sequelize);
var db = require('../models');


var customerService = {
    getAll : async(offset, limit) => {
        const { rows, count } = await db.Customer.findAndCountAll({
            distinct : true,
            offset : offset,
            limit : limit,
        });
        return {
            customers : rows.map(customer => new CustomerDTO(customer)),
            count
        } 
    },
    getById : async(id) => {
        console.log(id);
        const customer = await db.Customer.findByPk(id); 
        console.log(customer);
        return customer ? new CustomerDTO(customer) : null; 
    },
    create : async(toAdd) => {
        // const newCustomer = await db.Customer.create(toAdd);

        // return newCustomer ? new CustomerDTO(newCustomer) : null;

        const transaction = await db.sequelize.transaction()

        let customer;
        try {
            console.log(toAdd);
            customer = await db.Customer.create(toAdd, { transaction });
            // await customer.addAuthors(toAdd.authors, { transaction })
            // console.log(toAdd.authors);
            await transaction.commit();

            console.log(customer.customer_id);
            const addedcustomer = await db.Customer.findByPk(customer.customer_id
            //     , {
            //     include: [db.Basket]
            // }
            );
            console.log(addedcustomer);

            return addedcustomer ? new CustomerDTO(addedcustomer) : null;
        }
        catch (err) {
            console.log("ROLLBACK WARNING", err);
            await transaction.rollback();
            return null;
        }
    }
    
}

module.exports = customerService;