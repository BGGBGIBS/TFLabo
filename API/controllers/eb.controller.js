var { Request, Response } = require('express');
var ebService = require('../services/eb.service');


var ebController = {
    getAll : async (req,res) => {
        res.status(200).json( await ebService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await ebService.getById(req.params.id));
    },
    create : async (req,res) => {
        const eb = await ebService.create(req.body);
        res.location('/eb/' + eb.id);
        res.status(201).json(eb);
    }
}

module.exports = ebController;