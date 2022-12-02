const express = require("express");
const getFilesProps = require("../routes/files/getFilesProps");
const getFiles = require("../routes/files/getFiles");
const search = require("../routes/files/search");

const fileRouter = new express.Router();

fileRouter.get("/search", search);
fileRouter.get("/", getFiles);
fileRouter.get("/properties", getFilesProps);
// fileRouter.get("/meta", getFilesWithTypes);

module.exports = fileRouter;
