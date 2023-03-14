var { Request, Response } = require('express');
var customerService = require('../services/customer.service');


var customerController = {
    getAll : async (req,res) => {
        res.status(200).json( await customerService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await customerService.getById(req));
    }
}

module.exports = customerController;