const fs = require("fs");
const RecycleBin = require("./../../utilities/recycleBin");

module.exports = function (req, res) {
    const recycleBin = new RecycleBin();
    res.json({
        bin: recyclebin.getFiles(),
        success: 1,
    });
};
