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
            res.sendStatus(400);
            return;
        }
        const token = await jwt.generate(user);
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