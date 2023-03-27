var { Request, Response } = require('express');
var authorService = require('../services/author.service');
const { SuccessResponse, SuccessArrayResponse } = require('../utils/success.response');



var authorController = {
    getAll : async (req,res) => {
        const { offset, limit } = req.pagination;
        const { authors, count } = await authorService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse(authors, count));
    },
    getById : async (req,res) => {
        console.log(req.params.id);
        res.status(200).json( await authorService.getById(req.params.id));
    },
    create : async (req,res) => {
        console.log("AUTHOR", req.body);
        const author = await authorService.create(req.body);
        res.location('/author/' + author.id);
        res.status(201).json(new SuccessResponse(author, 201));
    }
}

module.exports = authorController;