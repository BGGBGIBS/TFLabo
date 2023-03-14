var { Request, Response } = require('express');
var basketService = require('../services/basket.service');


var basketController = {
    getAll : async (req,res) => {
        res.status(200).json( await basketService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await basketService.getById(req));
    }
}

module.exports = basketController;