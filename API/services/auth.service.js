const argon2 = require('argon2');
const { CustomerDTO } = require('../models/customer.dto');
const db = require('../models');

//Deux façon de faire : Un service Customer + un service Auth (Authentication) et les deux controllers associés
//Ou un seul service CustomerService et deux controllers auth + Customer
const authService = {
    register : async (CustomerToAdd) => {
        const hashPwd = await argon2.hash(CustomerToAdd.password);

        CustomerToAdd.password = hashPwd;

        const Customer = await db.Customer.create(CustomerToAdd);

        return Customer ? new CustomerDTO(Customer) : null;

    },

    login : async (email, password) => {
        const Customer = await db.Customer.findOne({
            where : { email }
        });

        if(!Customer) {
            return null;
        }

        const isValid = await argon2.verify(Customer.password, password);

        if(!isValid) {
            return null;
        }
        return new CustomerDTO(Customer);

    },
}

module.exports = authService;