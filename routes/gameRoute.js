const express = require("express");
const gameRouter = express.Router();
const gameController = require("../controllers/gameController");

gameRouter.get("/", gameController.getAllGame);
gameRouter.get("/:id", gameController.getSingleGame);
gameRouter.get("/create", gameController.getCreateGame);

module.exports = gameRouter;
