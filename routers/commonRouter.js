const express = require("express");
const create = require("./../routes/create");
const deleteFiles = require("../routes/deleteFiles");
const listing = require("./../routes/listing");
const rename = require("./../routes/rename");
const { bin, deleteBinFiles } = require("./../routes/bin");

const validateFolder = require("./../middleware/validateFolder");
const shouldExist = require("./../middleware/shouldExist");
const recents = require("../routes/recents");

const commonRouter = new express.Router();

commonRouter.get("/", shouldExist(true), listing);
commonRouter.post(
    "/",
    validateFolder("folderName"),
    shouldExist(false, req => req.query.path + `/${req.body.name}`),
    create
);
commonRouter.delete("/", shouldExist(true), deleteFiles);
commonRouter.patch("/", shouldExist(true), validateFolder("newFolderName"), rename);
commonRouter.get("/recents", recents);
commonRouter.get("/recycle-bin", bin);
commonRouter.delete("/recycle-bin/:name", deleteBinFiles);

module.exports = commonRouter;
