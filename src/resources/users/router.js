const usersRouter = require("express").Router();
const { createUser } = require("./controller")

usersRouter.post("/", createUser)

module.exports = usersRouter;