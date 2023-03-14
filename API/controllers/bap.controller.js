var { Request, Response } = require('express');
var bapService = require('../services/bap.service');


var bapController = {
    getAll : async (req,res) => {
        res.status(200).json( await bapService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await bapService.getById(req));
    }
}

module.exports = bapController;