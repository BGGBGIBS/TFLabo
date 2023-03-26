var { Request, Response } = require('express');
var customerService = require('../services/customer.service');


var customerController = {
    getAll : async (req,res) => {
        res.status(200).json( await customerService.getAll());
    },
    getById : async (req,res) => {
        console.log(req);
        res.status(200).json( await customerService.getById(req.params.id));
    },
    create : async (req,res) => {
        const customer = await customerService.create(req.body.data);
        res.location('/customer/' + customer.id);
        res.status(201).json(customer);
    }
}

module.exports = customerController;