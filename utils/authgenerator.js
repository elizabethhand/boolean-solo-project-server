const jwt = require('jsonwebtoken');
const dotenv = require("dotenv");

const JWT_SECRET = process.env.JWT

const createToken = async (payload) => {
    return jwt.sign(payload, JWT_SECRET)
}

module.exports = { createToken }