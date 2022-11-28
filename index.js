// Side Effect
require("dotenv").config();
require("./utilities/prototypes");

const express = require("express");
const app = new express();
const morgan = require("morgan");

// Routers
const commonRouter = require("./routers/commonRouter");

// Middlewares
const validatePath = require("./middleware/validatePath");
const errorHandler = require("./utilities/errorHandler");

app.use(express.json());
app.use(morgan("dev"));
app.use(validatePath);

app.use("/", commonRouter);

app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("server started on port " + process.env.PORT);
});
