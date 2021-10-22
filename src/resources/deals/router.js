const dealRouter = require("express").Router();

const { getAllDeals } = require("./controller")

dealRouter.get("/", getAllDeals)

module.exports = dealRouter;