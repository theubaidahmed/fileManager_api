const RecycleBin = require("./../utilities/RecycleBin");

function deleteFiles(req, res) {
    const { path } = req.query;
    console.log(path);
    const recycleBin = new RecycleBin();
    recycleBin.deleteFile(path);
    res.json({
        success: 1,
    });
}

module.exports = deleteFiles;
