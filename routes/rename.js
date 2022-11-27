const fs = require("fs");

function rename(req, res) {
    const { path } = req.query;
    const { name, newName } = req.body;

    try {
        fs.renameSync(`./fileManager/${path}/${name}`, `./fileManager/${path}/${newName}`);
        res.json({
            success: 1,
        });
    } catch {
        res.status(500).end("Something went wrong");
    }
}

module.exports = rename;
