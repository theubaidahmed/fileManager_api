const fs = require("fs");
const pathModule = require("path");

function deleteFiles(req, res) {
    const { path } = req.query;
    const fileName = pathModule.basename(path);
    const binPath = "./bin";

    fs.renameSync(path, pathModule.join(binPath, fileName));
    res.json({
        success: 1,
    });
}

module.exports = deleteFiles;
