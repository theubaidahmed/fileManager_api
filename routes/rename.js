const fs = require("fs");

function rename(req, res) {
    const { path } = req.data;
    const { folderName, newFolderName } = req.body;

    try {
        fs.renameSync(
            `./fileManager/${path}/${folderName}`,
            `./fileManager/${path}/${newFolderName}`
        );
        res.json({
            success: 1,
        });
    } catch {
        res.status(500).end("Something went wrong");
    }
}

module.exports = rename;
