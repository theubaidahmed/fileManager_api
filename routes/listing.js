const fs = require("fs");

function listing(req, res, next) {
    const { path } = req.query;
    const contents = fs.readdirSync(path);
    res.json({
        success: 1,
        contents,
    });
}

module.exports = listing;
