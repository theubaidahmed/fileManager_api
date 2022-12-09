const fs = require("fs");

class Recents {
    constructor() {
        this.indexPath = "./fileManager/indexes/recents.json";
        this.updateIndexes();
        this.timeExceed();
    }

    timeExceed() {
        if (!Object.keys(this.indexes).length) return;
        for (let key in this.indexes) {
            const birthTime = key.split(/[_-]/)[1];

            if (birthTime < new Date().setHours(-48)) {
                this.indexes[key] = undefined;
                this.writeIndexes();
            }
        }
    }

    updateIndexes() {
        this.indexes = JSON.parse(fs.readFileSync(this.indexPath));
    }

    writeIndexes() {
        fs.writeFileSync(this.indexPath, JSON.stringify(this.indexes));
    }

    add(path, name) {
        this.indexes[name] = {
            path,
            time: Date.now(),
        };
        this.writeIndexes();
    }
}

module.exports = Recents;
