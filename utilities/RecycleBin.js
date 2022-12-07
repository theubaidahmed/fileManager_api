const fs = require("fs");
const pathModule = require("path");

class RecycleBin {
    constructor() {
        this.indexPath = "./fileManager/indexes/recyclebin.json";
        this.binPath = "./fileManager/recyclebin/";
        this.updateIndexes();
    }

    updateIndexes() {
        this.indexes = JSON.parse(fs.readFileSync(this.indexPath));
    }

    writeIndexes() {
        // to create Locking mechanism
        fs.writeFileSync(this.indexPath, JSON.stringify(this.indexes));
        this.updateIndexes();
    }

    deleteFile(path) {
        const name = pathModule.basename(path);
        const binName = "d_" + Date.now() + "-" + Math.floor(Math.random() * 10000);
        fs.renameSync(path, this.binPath + name);
        this.indexes[binName] = {
            name,
            path: pathModule.dirname(path),
        };
        this.writeIndexes();
    }

    getFiles() {
        return Object.values(this.indexes);
    }

    deleteForever(name) {
        // Delete from indexes

        for (const file in this.indexes) {
            if (this.indexes[file].name === name) {
                this.indexes[file] = undefined;
                this.writeIndexes();
            }
        }

        // Delete from recyclebin
        const path = pathModule.join(this.binPath, name);

        if (fs.statSync(path).isDirectory()) {
            fs.rmdirSync(path);
        } else {
            fs.rmSync(path);
        }
    }

    restore(path) {
        this.indexes = JSON.parse(fs.readFileSync(this.indexPath));
    }
}

module.exports = RecycleBin;
