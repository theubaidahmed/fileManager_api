const fs = require("fs");

function validatePath(req, res, next) {
    const path = req.query.path;
    // req.data = {};
    console.log("path => " + path);

    if (!path) {
        req.query.path = "";
        //check file type
        if (fs.lstatSync(`./fileManager/${req.query.path}`).isDirectory())
            req.query.type = "directory";
        else req.query.type = "file";
        return next();
    }

    if (typeof path !== "string") return res.end("invalid request");

    if (!/^[a-zA-Z0-9._/-]+$/.test(path)) return res.end("format of path is not valid");

    if (/\.\.\//.test(path)) return res.end("Going backward is not allowed; Don't try to be smart");

    //check file type
    if (fs.lstatSync(`./fileManager/${path}`).isDirectory()) req.query.type = "directory";
    else req.query.type = "file";

    // sanitize the path
    req.query.path = path.replace(/^\/|\/$/g, "");

    next();
}

module.exports = validatePath;
