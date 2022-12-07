const fs = require("fs");

module.exports = function (req, res) {
    const { path } = req.query;
    const { movePath } = req.body;

    fs.renameSync(path, `./fileManager/files/${movePath}`);

    res.json({
        success: 1,
    });
};
