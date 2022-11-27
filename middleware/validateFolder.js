module.exports = function (fieldName) {
    return function (req, res, next) {
        const folderName = req.body[fieldName];

        if (!/^[a-zA-Z0-9_. -]+$/.test(folderName)) return res.end("Foldername is not valid");

        next();
    };
};
