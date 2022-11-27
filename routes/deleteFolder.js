const fs = require("fs");

function deleteFolder(req, res) {
    const { path, type } = req.data;

    try {
        if (type == "directory") fs.rmdirSync(`./fileManager/${path}`);
        fs.rmSync(`./fileManager/${path}`);
        res.json({
            success: 1,
        });
    } catch {
        res.status(500).end("Something went wrong");
    }
}

module.exports = deleteFolder;
