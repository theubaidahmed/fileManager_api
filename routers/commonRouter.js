const express = require("express");
const create = require("./../routes/create");
const deleteFolder = require("./../routes/deleteFolder");
const listing = require("./../routes/listing");
const rename = require("./../routes/rename");

const validateFolder = require("./../middleware/validateFolder");
const shouldExist = require("./../middleware/shouldExist");

const commonRouter = new express.Router();

commonRouter.get("/", shouldExist(true), listing);
commonRouter.post(
    "/",
    validateFolder("folderName"),
    shouldExist(false, req => req.query.path + `/${req.body.name}`),
    create
);
commonRouter.delete("/", shouldExist(true), deleteFolder);
commonRouter.patch("/", shouldExist(true), validateFolder("newFolderName"), rename);

module.exports = commonRouter;
