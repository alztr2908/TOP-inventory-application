const express = require("express");
const genreRouter = express.Router();
const genreController = require("../controllers/genreController");

genreRouter.get("/", genreController.getAllGenre);
genreRouter.get("/create", genreController.getCreateGenre);

module.exports = genreRouter;
