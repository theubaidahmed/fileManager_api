const fs = require("fs");

module.exports = function (req, res) {
    const { path } = req.query;
    const { copyPath } = req.body;
    console.log(path);

    fs.copyFileSync(path, `./fileManager/files/${copyPath}`);

    res.json({
        success: 1,
    });
};
