var { Request, Response } = require('express');
var authorService = require('../services/author.service');


var authorController = {
    getAll : async (req,res) => {
        res.status(200).json( await authorService.getAll());
    },
    getById : async (req,res) => {
        console.log(req.params.id);
        res.status(200).json( await authorService.getById(req.params.id));
    },
    create : async (req,res) => {
        const author = await authorService.create(req.body.data);
        res.location('/author/' + author.id);
        res.status(201).json(author);
    }
}

module.exports = authorController;