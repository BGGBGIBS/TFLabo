var { Request, Response } = require('express');
var bookService = require('../services/book.service');


var bookController = {
    getAll : async (req,res) => {
        res.status(200).json( await bookService.getAll());
    },
    getById : async (req,res) => {
        res.status(200).json( await bookService.getById(req));
    }
}

module.exports = bookController;