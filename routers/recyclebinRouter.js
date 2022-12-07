const express = require("express");
const deleteBinFiles = require("../routes/recyclebin/deleteBinFiles");
const recycleFiles = require("../routes/recyclebin/recycleFiles");

const recyclebinRouter = new express.Router();

recyclebinRouter.get("/", recycleFiles);
recyclebinRouter.delete("/", deleteBinFiles);

module.exports = recyclebinRouter;
