var { Request, Response } = require('express');
var bookService = require('../services/book.service');


var bookController = {
    getAll : async (req,res) => {
        res.status(200).json( await bookService.getAll());
    },
    getById : async (req,res) => {
        const book = await bookService.getById(req.params.id);
        if(!book) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(book);
        // res.status(200).json( await bookService.getById(req));
    },
    getByAuthor : async (req,res) => {
        const book = await bookService.getByAuthor(req.params.id);
        if(!book){
            res.sendStatus(404);
            return;
        }
        res.status(200).json(book);
    }
}

module.exports = bookController;