var { Request, Response } = require('express');
var elService = require('../services/el.service');


var elController = {
    getAll : async (req,res) => {
        res.status(200).json( await elService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await elService.getById(req));
    }
}

module.exports = elController;