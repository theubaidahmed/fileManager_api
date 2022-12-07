const express = require("express");
const create = require("./../routes/create");
const deleteFiles = require("../routes/deleteFiles");
const listing = require("./../routes/listing");
const rename = require("./../routes/rename");

const validateFolder = require("./../middleware/validateFolder");
const shouldExist = require("./../middleware/shouldExist");
const recents = require("./../routes/recents");
const move = require("../routes/move");
const copy = require("../routes/copy");

const commonRouter = new express.Router();

commonRouter.get("/", shouldExist(true), listing);
commonRouter.post(
    "/",
    validateFolder("folderName"),
    shouldExist(false, req => req.query.path + `/${req.body.name}`),
    create
);
commonRouter.patch("/", shouldExist(true), validateFolder("newFolderName"), rename);
commonRouter.patch("/delete", shouldExist(true), deleteFiles);
commonRouter.get("/recents", recents);
commonRouter.patch("/move", move);
commonRouter.patch("/copy", copy);

module.exports = commonRouter;
