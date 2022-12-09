const RecycleBin = require("./../../utilities/RecycleBin");

module.exports = function (req, res) {
    const { name } = req.params;
    if (!name) throw new Error("file name is required");

    const recyclebin = new RecycleBin();
    recyclebin.deleteForever(name);

    res.json({
        success: 1,
    });
};
