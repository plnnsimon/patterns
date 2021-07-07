class Dir {
    getInfo() {
        return console.log(`Directory - ${this.dir}`);
    }
}

class Folder extends Dir {
    constructor(folderName) {
        super()
        this.folderName = folderName;
    }

    getInfo() {
        return console.log(`Directory - ${this.dir}`);
    }
}

class FolderComposite extends Dir {
    constructor(folderName) {
        super()
        this.dir = []
        if (folderName) {
            this.dir.push(new Folder(folderName))
        }
    }

    addField(folderName) {
        this.dir.push(folderName)
    }

    removeField(folderName) {
        this.dir.splice(this.dir.indexOf(folderName), 1)
    }

    getInfo() {
        return console.log(`Directory - ${JSON.stringify(this.dir, null, ' ')}`)
    }
}

const folder = new FolderComposite()

const firstFolder = new Folder("firstFolder")
const secondFolder = new Folder(firstFolder)

folder.addField(firstFolder)
folder.addField(secondFolder)

folder.getInfo()