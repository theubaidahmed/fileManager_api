const fs = require("fs");

module.exports = function (shouldExist, pathCb) {
    return (req, res, next) => {
        const path = typeof pathCb === "function" ? pathCb(req) : req.query.path;
        const doesExist = fs.existsSync(path);

        console.log("does" + doesExist);

        if (!(doesExist ^ shouldExist)) return next();

        const message = shouldExist
            ? "File or Folder doesn't exist"
            : "File or Folder already exist";

        throw new Error(message);
    };
};
