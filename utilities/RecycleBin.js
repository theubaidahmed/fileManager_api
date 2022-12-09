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
            path,
        };
        this.writeIndexes();
    }

    getFiles() {
        const files = [];
        for (let file in this.indexes) {
            files.push({ [file]: this.indexes[file] });
        }
        return files;
    }

    deleteForever(name) {
        // Delete from indexes

        for (const file in this.indexes) {
            if (this.indexes[file].name === name) {
                this.indexes[file] = undefined;
                this.writeIndexes();
                break;
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

    restore(binName) {
        for (let file in this.indexes) {
            if (binName === file) {
                const name = this.indexes[file].name;
                const path = this.indexes[file].path;
                fs.renameSync(this.binPath + name, path);
                this.indexes[file] = undefined;
                this.writeIndexes();
            }
        }
    }
}

module.exports = RecycleBin;
