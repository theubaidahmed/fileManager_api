require("dotenv").config();
const express = require("express");
const app = new express();
const morgan = require("morgan");
const validatePath = require("./middleware/validatePath");
const commonRouter = require("./routers/commonRouter");

// const errorHandler = require("./utilities/errorHandler");

app.use(express.json());
app.use(morgan("dev"));
app.use(validatePath);

app.use("/", commonRouter);

// app.use(errorHandler);

app.listen(process.env.PORT, () => {
    console.log("server started on port " + process.env.PORT);
});
