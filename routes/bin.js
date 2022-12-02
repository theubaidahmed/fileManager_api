const fs = require("fs");

function deleteBinFiles(req, res) {
    const { name } = req.params;
    if (!name) throw new Error("file name is required");
    const path = "./bin/" + name;

    if (fs.statSync(path).isDirectory()) {
        fs.rmdirSync(path);
    } else {
        fs.rmSync(path);
    }

    res.json({
        success: 1,
    });
}

function bin(req, res) {
    const bin = fs.readdirSync("./bin", { withFileTypes: true });

    // Adding file types
    bin.forEach(file => {
        file.type = file.isFile() ? "file" : "folder";
    });

    res.json({
        bin,
        success: 1,
    });
}

module.exports = { bin, deleteBinFiles };
