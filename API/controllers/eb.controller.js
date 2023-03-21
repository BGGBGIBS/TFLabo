var { Request, Response } = require('express');
var ebService = require('../services/eb.service');


var ebController = {
    getAll : async (req,res) => {
        res.status(200).json( await ebService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await ebService.getById(req));
    }
}

module.exports = ebController;