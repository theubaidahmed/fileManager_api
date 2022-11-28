module.exports = function (err, req, res, next) {
    if (err.name === "Error") {
        return res.status(400).json({
            success: 0,
            message: err.message,
        });
    }
    res.json({
        error: err,
    });
};
