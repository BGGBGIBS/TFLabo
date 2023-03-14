var { Request, Response } = require('express');
var authorService = require('../services/author.service');


var authorController = {
    getAll : async (req,res) => {
        res.status(200).json( await authorService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await authorService.getById(req));
    }
}

module.exports = authorController;