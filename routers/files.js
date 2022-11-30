const express = require("express");
const getFilesWithTypes = require("../routes/files/getFilesWithTypes");
const search = require("../routes/files/search");

const fileRouter = new express.Router();

fileRouter.get("/search", search);
fileRouter.get("/all", getFilesWithTypes);

module.exports = fileRouter;
