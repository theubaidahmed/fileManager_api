const fs = require("fs");
const pathModule = require("path");

function rename(req, res) {
    const { path } = req.query;
    const { newName } = req.body;

    fs.renameSync(path, pathModule.dirname(path) + "/" + newName);
    res.json({
        success: 1,
    });
}

module.exports = rename;
