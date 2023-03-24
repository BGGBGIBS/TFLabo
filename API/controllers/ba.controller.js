var { Request, Response } = require('express');
var baService = require('../services/ba.service');


var baController = {
    getAll : async (req,res) => {
        res.status(200).json( await baService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await baService.getById(req.params));
    },
    getByAuthor : async (req,res) => {
        const ba = await baService.getByAuthor(req);
        if(!ba){
            res.sendStatus(404);
            return;
        }
        res.status(200).json(ba);
    }
}

module.exports = baController;