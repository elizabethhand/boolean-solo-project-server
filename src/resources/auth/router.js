const authRouter = require("express").Router();

const { loginUser } = require("./controller")

authRouter.route("/login").post(loginUser);

module.exports = authRouter;