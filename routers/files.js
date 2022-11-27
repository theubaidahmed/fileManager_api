const express = require("express");

const fileRouter = new express.Router();

fileRouter.get("/files");

module.exports = fileRouter;
