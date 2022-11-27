const fs = require("fs");

function create(req, res) {
    const { path } = req.query;
    const { name, type } = req.body;
    type.toLowerCase();
    console.log(path, name, type);
    try {
        const contents =
            type == "folder"
                ? fs.mkdirSync(`./fileManager/${path}/${name}`)
                : fs.writeFileSync(`./fileManager/${path}/${name}.${type}`, name);
        res.json({
            contents,
            success: 1,
        });
    } catch (e) {
        console.log(e);
        res.status(500).end("Something went wrong");
    }
}

module.exports = create;
