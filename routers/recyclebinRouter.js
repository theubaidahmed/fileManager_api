const express = require("express");
const deleteBinFiles = require("./../routes/recyclebin/deleteBinFiles");
const recycleFiles = require("./../routes/recyclebin/recycleFiles");
const restoreFiles = require("./../routes/recyclebin/restoreFiles");

const recyclebinRouter = new express.Router();

recyclebinRouter.get("/", recycleFiles);
recyclebinRouter.delete("/", deleteBinFiles);
recyclebinRouter.patch("/restore", restoreFiles);

module.exports = recyclebinRouter;
