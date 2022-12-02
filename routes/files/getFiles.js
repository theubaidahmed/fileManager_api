const fs = require("fs");
const pathModule = require("path");

module.exports = function (req, res, next) {
    const path = req.query.path;
    const files = {};

    function getFiles(path) {
        const contents = fs.readdirSync(path, { withFileTypes: true });
        contents.forEach(dirent => {
            if (dirent.isDirectory()) return getFiles(pathModule.join(path, dirent.name));

            const extension = pathModule.extname(dirent.name).slice(1);

            if (files[extension]) {
                files[extension].push(dirent.name);
            } else {
                files[extension] = [dirent.name];
            }
        });
    }

    getFiles(path);

    res.json({
        success: 0,
        files,
    });
};
