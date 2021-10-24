const authRouter = require("express").Router();

const { loginUser } = require("./controller")

authRouter.get("/login").post(loginUser);

module.exports = authRouter;