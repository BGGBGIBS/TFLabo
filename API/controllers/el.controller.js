var { Request, Response } = require('express');
var elService = require('../services/el.service');


var elController = {
    getAll : async (req,res) => {
        res.status(200).json( await elService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await elService.getById(req.params.id));
    },
    create : async (req,res) => {
        const el = await elService.create(req.body.data);
        res.location('/el/' + el.id);
        res.status(201).json(el);
    }
}

module.exports = elController;