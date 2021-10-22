const categoryRouter = require("express").Router();

const { getAllCategories } = require("./controller")

categoryRouter.get("/", getAllCategories)

module.exports = categoryRouter;