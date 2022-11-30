const fs = require("fs");

function listing(req, res, next) {
    const { path } = req.query;
    const contents = fs.readdirSync(path, { withFileTypes: true });

    // Adding file types
    contents.forEach(file => {
        file.type = file.isFile() ? "file" : "folder";
    });

    res.json({
        success: 1,
        contents,
    });
}

module.exports = listing;
