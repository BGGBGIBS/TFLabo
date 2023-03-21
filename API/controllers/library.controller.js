var { Request, Response } = require('express');
var libraryService = require('../services/library.service');


var libraryController = {
    getAll : async (req,res) => {
        res.status(200).json( await libraryService.getAll());
    },
    getById : async (req,res) => {
        const { id } = req.params;
        const library = await libraryService.getById(id);
        if(!library) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(library);
        // res.status(200).json( await libraryService.getById(req.params));
    },
    create : async (req, res) => {
        const library = await libraryService.create(req.body);
        res.location('/library/'+ library.library_id);
        res.status(201).json(new SuccessResponse(library, 201));
    }
}

module.exports = libraryController;