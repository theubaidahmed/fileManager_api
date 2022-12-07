const fs = require("fs");

module.exports = function (req, res) {
    console.log("hello");
    const filePath = req.query.path;
    console.log(filePath);

    const props = fs.statSync(filePath);
    console.log(props);
    res.json({
        success: 1,
        props,
    });
};
