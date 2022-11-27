const express = require("express");
const validateFolder = require("../middleware/validateFolder");
const create = require("../routes/create");
const deleteFolder = require("../routes/deleteFolder");
const listing = require("../routes/listing");
const rename = require("../routes/rename");

const commonRouter = new express.Router();

commonRouter.get("/", listing);
commonRouter.post("/", validateFolder("folderName"), create);
commonRouter.delete("/", deleteFolder);
commonRouter.patch("/", validateFolder("newFolderName"), rename);

module.exports = commonRouter;
