const fs = require("fs");

function create(req, res) {
    const { path } = req.data;
    const { folderName, fileName } = req.body;
    console.log(folderName, fileName);

    try {
        const folders =
            folderName === undefined
                ? fs.writeFileSync(`./fileManager/${path}/${fileName}`, fileName)
                : fs.mkdirSync(`./fileManager/${path}/${folderName}`);
        res.json({
            folders,
            success: 1,
        });
    } catch {
        res.status(500).end("Something went wrong");
    }
}

module.exports = create;
