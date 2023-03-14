var { Request, Response } = require('express');
var cbService = require('../services/cb.service');


var cbController = {
    getAll : async (req,res) => {
        res.status(200).json( await cbService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await cbService.getById(req));
    }
}

module.exports = cbController;