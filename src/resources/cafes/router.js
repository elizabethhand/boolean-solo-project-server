const cafeRouter = require("express").Router();

const { getOneCafe } = require("./controller")

cafeRouter.get("/:id", getOneCafe)

module.exports = cafeRouter;