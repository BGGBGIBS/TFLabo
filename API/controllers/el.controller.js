var { Request, Response } = require('express');
var elService = require('../services/el.service');
var { SuccessArrayResponse } = require('../utils/success.response');

var elController = {
    getAll : async (req,res) => {
        const { offset, limit } = req.pagination;

        const { els, count } = await elService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse(els, count));
    },
    getById : async (req,res) => {
        res.status(200).json( await elService.getById(req.params.id));
    },
    create : async (req,res) => {
        const el = await elService.create(req.body);
        res.location('/el/' + el.id);
        res.status(201).json(el);
    }
}

module.exports = elController;