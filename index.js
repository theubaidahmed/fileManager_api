require("dotenv").config();
const express = require("express");
const app = new express();
const morgan = require("morgan");
const validateFolder = require("./middleware/validateFolder");
const validatePath = require("./middleware/validatePath");

// Routes
const create = require("./routes/create");
const deleteFolder = require("./routes/deleteFolder");
const listing = require("./routes/listing");
const rename = require("./routes/rename");
const errorHandler = require("./utilities/errorHandler");

app.use(express.json());
app.use(morgan("dev"));
app.use(validatePath);

app.route("/")
    .get(listing)
    .post(validateFolder("folderName"), create)
    .delete(deleteFolder)
    .patch(validateFolder("newFolderName"), rename);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("server started on port " + process.env.PORT);
});
