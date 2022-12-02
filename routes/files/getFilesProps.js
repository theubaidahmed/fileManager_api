const fs = require("fs");

module.exports = function (req, res, next) {
    const filePath = req.query.path;

    const props = fs.statSync(filePath);
    console.log(props);
    res.json({
        success: 1,
        props,
    });
};
