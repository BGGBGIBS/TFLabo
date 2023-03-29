var { Request, Response } = require('express');
var publisherService = require('../services/publisher.service');
var { SuccessArrayResponse } = require('../utils/success.response');

var publisherController = {
    getAll : async (req,res) => {
        publishers = await publisherService.getAll();
        res.status(200).json( new SuccessArrayResponse(publishers));
    },
    getById : async (req,res) => {
        res.status(200).json( await publisherService.getById(req.params.id));
    },
    create : async (req,res) => {
        const publisher = await publisherService.create(req.body);
        res.location('/publisher/' + publisher.id);
        res.status(201).json(publisher);
    }
}

module.exports = publisherController;