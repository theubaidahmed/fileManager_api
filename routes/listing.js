const fs = require("fs");

function listing(req, res, next) {
    const { path, type } = req.query;
    let data = "";
    try {
        if (type == "directory") data = fs.readdirSync(`./fileManager/${path}`);
        else data = fs.readFileSync(`./fileManager/${path}`).toString();
        res.json({
            [type]: data,
            success: 1,
        });
    } catch {
        res.status(500).end("something went wrong");
    }
}

module.exports = listing;
