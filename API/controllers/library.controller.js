var { Request, Response } = require('express');
var libraryService = require('../services/library.service');
var { SuccessResponse , SuccessArrayResponse} = require('../utils/success.response');


var libraryController = {
    getAll : async (req,res) => {
        libraries = await libraryService.getAll();
        res.status(200).json( new SuccessArrayResponse(libraries));
    },
    getById : async (req,res) => {
        const library = await libraryService.getById(req.params.id);
        if(!library) {
            res.sendStatus(404);
            return;
        }
        res.status(200).json(new SuccessResponse(library));
    },
    create : async (req, res) => {
        const library = await libraryService.create(req.body);
        res.location('/library/'+ library.library_id);
        res.status(201).json(new SuccessResponse(library, 201));
    }
}

module.exports = libraryController;