const fs = require("fs");
const pathModule = require("path");

module.exports = function (req, res, next) {
    const path = "./fileManager/";
    const recents = [];

    getFiles(path);

    function getFiles(path) {
        const contents = fs.readdirSync(path, { withFileTypes: true });
        contents.forEach(file => {
            if (file.isDirectory()) return getFiles(pathModule.join(path, file.name));

            const fileProps = fs.statSync(pathModule.join(path, file.name));
            if (fileProps.birthtimeMs > new Date().setHours(-48)) {
                recents.push({
                    file: file.name,
                    type: "file",
                });
            }
        });
    }
    res.json({
        success: 1,
        recents,
    });
};
