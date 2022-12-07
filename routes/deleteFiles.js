const RecycleBin = require("./../utilities/RecycleBin");

function deleteFiles(req, res) {
    const { path } = req.query;
    const recycleBin = new RecycleBin();
    recycleBin.deleteFile(path, (files = ""));
    res.json({
        success: 1,
    });
}

module.exports = deleteFiles;
