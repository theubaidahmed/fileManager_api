const fs = require("fs");

function create(req, res) {
    const { path } = req.query;
    const { name, type } = req.body;

    const fullPath = `${path}/${name}`;

    if (["folder", "dir"].includesi(type)) {
        fs.mkdirSync(fullPath);
    } else if (["file"].includesi(type)) {
        fs.writeFileSync(fullPath, "");
    } else {
        throw new Error("type not supported");
    }

    res.json({
        success: 1,
    });
}

module.exports = create;
