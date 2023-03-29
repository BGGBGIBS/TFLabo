const argon2 = require('argon2');
const  CustomerDTO  = require('../dto/customer.dto');
const db = require('../models');

//Deux façon de faire : Un service Customer + un service Auth (Authentication) et les deux controllers associés
//Ou un seul service CustomerService et deux controllers auth + Customer
const authService = {
    register : async (CustomerToAdd) => {

        const transaction = await db.sequelize.transaction()

        let customer;
        try {
            console.log(CustomerToAdd);

            const hashPwd = await argon2.hash(CustomerToAdd.customer_password);

            console.log(hashPwd);
            CustomerToAdd.customer_password = hashPwd;

            customer = await db.Customer.create(CustomerToAdd, { transaction });
            // await customer.addAuthors(CustomerToAdd.authors, { transaction })
            // console.log(CustomerToAdd.authors);
            await transaction.commit();

            console.log("CUSTOMER ID", customer.customer_id);
            const addedcustomer = await db.Customer.findByPk(customer.customer_id);
            // const addedcustomer = await db.Customer.findByPk(customer.customer_id, {
            //     include: [db.Basket]
            // });
            console.log("ADDED", addedcustomer);
            return addedcustomer ? new CustomerDTO(addedcustomer) : null;


            
        }
        catch (err) {
            console.log(err);
            await transaction.rollback();
            return null;
        }

    },

    login : async (customer_email, localcustomer_password) => {
        console.log("EMAIL", customer_email);
        console.log("PASSWORD", localcustomer_password);
        const customer = await db.Customer.findOne(
            {
            where : { customer_email }
        }
        );
        console.log("CUSTOMER FINDED",customer);
        if(!customer) {
            return null;
        }
        console.log("CUSTOMER PASSWORD", customer.customer_password);
        console.log("LOCAL PASSWORD", localcustomer_password);

        
        const isValid = await argon2.verify(customer.customer_password, localcustomer_password);
        console.log("ARGON2 ", isValid);
        if(!isValid) {
            return null;
        }
        console.log("TO RETURN ", customer);
        return new CustomerDTO(customer);

    },
}

module.exports = authService;