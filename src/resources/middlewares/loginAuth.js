const { NextFunction, Request, Response } = require("express");
const { validateToken } = require("../../../utils/authgenerator");

function loginAuth(req, res, next) {
    const token = req.cookies.token;
    let userData = null;

    userData = token && validateToken(token);

    if (userData) {
        req.currentUser = userData;
        next();
    } else {
        res
            .status(401)
            .json({ err: "You need to be logged in to access this data" });
    }
};

module.exports = loginAuth