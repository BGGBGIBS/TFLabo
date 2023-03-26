var { Request, Response } = require('express');
var basketService = require('../services/basket.service');


var basketController = {
    getAll : async (req,res) => {
        res.status(200).json( await basketService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await basketService.getById(req.params.id));
    },
    create : async (req,res) => {
        const basket = await basketService.create(req.body.data);
        res.location('/basket/' + basket.id);
        res.status(201).json(basket);
    }
}

module.exports = basketController;