var { Request, Response } = require('express');
var bookService = require('../services/book.service');
const { SuccessResponse, SuccessArrayResponse } = require('../utils/success.response');


var bookController = {
    getAll : async (req, res) => {
        const { offset, limit } = req.pagination;

        const { books, count } = await bookService.getAll(offset, limit);
        res.status(200).json(new SuccessArrayResponse(books, count));
    },
    getById : async (req,res) => {
        const book = await bookService.getById(req.params.id);
        if(!book) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(book);
    },
    getByAuthor : async (req,res) => {
        const book = await bookService.getByAuthor(req.params.id);
        if(!book){
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(book));
    },
    create : async (req,res) => {
        console.log("BOOK", req.body);
        try {
            const book = await bookService.create(req.body);
            res.location('/book/' + book.id);
            res.status(201).json(new SuccessResponse(book, 201));

        }
        catch(err){
            console.log(err);
            res.sendStatus(500)
        }
    }
}

module.exports = bookController;