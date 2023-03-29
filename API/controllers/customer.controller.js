var { Request, Response } = require('express');
var customerService = require('../services/customer.service');
var { SuccessResponse, SuccessArrayResponse } = require('../utils/success.response');


var customerController = {
    getAll : async (req, res) => {
        const { offset, limit } = req.pagination;

        const { customers, count } = await customerService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse(customers, count));
    },
    getById : async (req,res) => {
        const customer = await customerService.getById(req.params.id);
        if(!customer) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(customer);
    },
    create : async (req,res) => {
        console.log("customer", req.body);
        try {
            const customer = await customerService.create(req.body);
            res.location('/customer/' + customer.id);
            res.status(201).json(new SuccessResponse(customer, 201));

        }
        catch(err){
            console.log(err);
            res.sendStatus(500)
        }
    }
}

module.exports = customerController;