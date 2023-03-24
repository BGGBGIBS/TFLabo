const argon2 = require('argon2');
const { CustomerDTO } = require('../models/customer.dto');
const db = require('../models');

//Deux façon de faire : Un service Customer + un service Auth (Authentication) et les deux controllers associés
//Ou un seul service CustomerService et deux controllers auth + Customer
const authService = {
    register : async (CustomerToAdd) => {
        //Hashage du password
        const hashPwd = await argon2.hash(CustomerToAdd.password);

        //Remplacement du password sur le CustomerToAdd
        CustomerToAdd.password = hashPwd;

        //Ajout en db
        const Customer = await db.Customer.create(CustomerToAdd);

        //Renvoie du Customer si crée ou null
        return Customer ? new CustomerDTO(Customer) : null;

    },

    login : async (email, password) => {
        // Récupérer l'utilisateur qui possède cet email
        const Customer = await db.Customer.findOne({
            where : { email }
        });

        //Si pas d'utilisateur -> return null
        if(!Customer) {
            return null;
        }

        //Si utilisateur :
        //Vérifier que le password entré = password hashé
        const isValid = await argon2.verify(Customer.password, password); //On compare le password en db (hashé) au password entré pour se connecter (en clair), si les deux concordent, argon.verify renvoie true, sinon false

        //Si verif pas ok -> return null
        if(!isValid) {
            return null;
        }
        //Si verif ok -> renvoie le Customer
        return new CustomerDTO(Customer);

    },
}

module.exports = authService;