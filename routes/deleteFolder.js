const fs = require("fs");

function deleteFolder(req, res) {
    const { path } = req.query;

    if (fs.lstatSync(path).isDirectory()) {
        fs.rmdirSync(path);
    } else {
        fs.rmSync(path);
    }

    res.json({
        success: 1,
    });
}

module.exports = deleteFolder;
