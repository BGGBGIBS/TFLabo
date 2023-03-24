var { Request, Response } = require('express');
var publisherService = require('../services/publisher.service');


var publisherController = {
    getAll : async (req,res) => {
        res.status(200).json( await publisherService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await publisherService.getById(req.params));
    }
}

module.exports = publisherController;