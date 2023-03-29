var { Request, Response } = require('express');
var basketService = require('../services/basket.service');
var { SuccessArrayResponse } = require('../utils/success.response');

var basketController = {
    getAll : async (req,res) => {
        // res.status(200).json( await basketService.getAll());
        const { offset, limit } = req.pagination;

        const { baskets, count } = await basketService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse(baskets, count));
    },
    getById : async (req,res) => {
        res.status(200).json( await basketService.getById(req.params.id));
    },
    create : async (req,res) => {
        const basket = await basketService.create(req.body);
        res.location('/basket/' + basket.id);
        res.status(201).json(basket);
    }
}

module.exports = basketController;