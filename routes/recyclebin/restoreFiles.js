const RecycleBin = require("./../../utilities/RecycleBin");

module.exports = function (req, res) {
    const binName = req.query.binName;
    console.log(binName);
    const recylebin = new RecycleBin();
    recylebin.restore(binName);
    res.json({
        success: 1,
    });
};
