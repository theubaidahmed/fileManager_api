const fs = require("fs");
const pathModule = require("path");

module.exports = function (req, res, next) {
    const { path, search } = req.query;
    const files = [];

    function searchFiles(path) {
        const contents = fs.readdirSync(path, { withFileTypes: true });
        contents.forEach(dirent => {
            if (dirent.isDirectory()) searchFiles(pathModule.join(path, dirent.name));

            if (new RegExp(search, "i").test(dirent.name))
                files.push({ ...dirent, type: dirent.isDirectory() ? "folder" : "file" });
        });
    }

    searchFiles(path);

    res.json({
        success: 0,
        files,
    });
};
