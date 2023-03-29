const { Request, Response } = require("express");
const authService = require("../services/auth.service");
const { ErrorResponse } = require("../utils/error.response");
const { SuccessResponse } = require("../utils/success.response");
const jwt = require('../utils/jwt-utils');

const authController = {
    
    register : async (req, res) => {
        const data = req.body;

        const user = await authService.register(req.body);

        if(!user) {
            res.sendStatus(400);
            return;
        }
        const token = await jwt.generate(user);
        res.status(201).json(token, user , 201);

    },


    login : async (req, res) => {
        const { customer_email, customer_password } = req.body;

        const user = await authService.login(customer_email, customer_password);
        console.log("CONTROLLER", user);
        if(!user) {
            res.status(400).json("Bad credentials"); 
            return;
        }

        const token = await jwt.generate(user);
        console.log("TOKEN", token);
        res.status(200).json( new SuccessResponse({token, user}) );
    }
}

module.exports = authController;