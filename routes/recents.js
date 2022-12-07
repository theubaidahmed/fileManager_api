const fs = require("fs");
// const Recent = require("./../utilities/Recents");

module.exports = function (req, res, next) {
    const path = "./fileManager/indexes/recents.json";

    // const recents = new Recent();
    // recents.timeExceed();
    const contents = JSON.parse(fs.readFileSync(path));

    res.json({
        success: 1,
        recents: Object.values(contents),
    });
};
