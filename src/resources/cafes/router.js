const cafeRouter = require("express").Router();

const { getOneCafe, getAllCafes } = require("./controller")

cafeRouter.get("/:id", getOneCafe)

cafeRouter.get("/", getAllCafes)

module.exports = cafeRouter;