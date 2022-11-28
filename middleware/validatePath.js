const fs = require("fs");

function validatePath(req, res, next) {
    let { path = "/" } = req.query;
    console.log("path => " + path);

    // Checking if path is a string
    if (typeof path !== "string") return res.end("invalid request");

    // Check the format of the path
    if (!/^[a-zA-Z0-9._/-]+$/.test(path)) return res.end("format of path is not valid");

    // Checking if the user is trying to go backward
    if (/\.\.\//.test(path)) return res.end("Going backward is not allowed; Don't try to be smart");

    // sanitize the path
    path = req.query.path = "./fileManager/" + path.replace(/^\/|\/$/g, "");

    next();
}

module.exports = validatePath;
