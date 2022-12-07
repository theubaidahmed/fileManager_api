// Side Effect
require("dotenv").config();
require("./utilities/prototypes");

const express = require("express");
const app = new express();
const morgan = require("morgan");

// Routers
const commonRouter = require("./routers/commonRouter");
const fileRouter = require("./routers/filesRouter");
const recyclebinRouter = require("./routers/recyclebinRouter");

// Middlewares
const validatePath = require("./middleware/validatePath");
const errorHandler = require("./utilities/errorHandler");

app.use(express.json());
app.use(morgan("dev"));
app.use(validatePath);

app.use("/", commonRouter);
app.use("/files", fileRouter);
app.use("/recycle-bin", recyclebinRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("server started on port " + process.env.PORT);
});

// ---------------------- To Do ---------------------- //
// Move and Copy
// Recent Indexing done
// Restore done
// Bulk delete from a single folder
// Node js course
// --------------------------------------------------- //

//--------------------- Errors ----------------------- //

// --------------------------------------------------- //
