const express = require("express");
const devRouter = express.Router();
const devController = require("../controllers/devController");

devRouter.get("/", devController.getAllDev);
devRouter.get("/:id", devController.getSingleDev);
devRouter.get("/create", devController.getCreateDev);

module.exports = devRouter;
