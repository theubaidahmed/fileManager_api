const fs = require("fs");
const RecycleBin = require("./../../utilities/recycleBin");

module.exports = function (req, res) {
    const recyclebin = new RecycleBin();

    res.json({
        bin: recyclebin.getFiles(),
        success: 1,
    });
};
