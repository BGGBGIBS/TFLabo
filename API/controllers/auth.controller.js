const { Request, Response } = require("express");
const authService = require("../services/auth.service");
const { ErrorResponse } = require("../utils/error.response");
const { SuccessResponse } = require("../utils/success.response");
const jwt = require('../utils/jwt-utils');

const authController = {
    
    register : async (req, res) => {
        const data = req.body;

        const user = await authService.register(data);

        if(!user) {
            res.sendStatus(400); //Bad Request : Les données ne sont pas bonnes
            return;
        }
        const token = await jwt.generate(user);
        //Deux solutions : 
        // - Soit on renvoie juste le token
        //res.status(201).json(new SuccessResponse(token, 201));
        // - Soit on renvoie un objet, contenant le token ET le user
        res.status(201).json(token, user , 201);

    },


    login : async (req, res) => {
        const { email, password } = req.body;

        const user = await authService.login(email, password);

        if(!user) {
            res.status(400).json("Bad credentials"); 
            return;
        }

        const token = await jwt.generate(user);
        res.status(200).json( token, user );
    }
}

module.exports = authController;