var { Request, Response } = require('express');
var bwService = require('../services/bw.service');


var bwController = {
    getAll : async (req,res) => {
        res.status(200).json( await bwService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await bwService.getById(req));
    }
}

module.exports = bwController;