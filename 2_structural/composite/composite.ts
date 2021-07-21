
class Folder {
	folder: Array<any>
    constructor(public folderName: string) {
        this.folderName = folderName
        this.folder = []
    }

    addFile(file: MyFile): void {
        this.folder.push(file)
    }

    addFolder(folder: Folder): void {
      this.folder.push(folder)
    }

    getInfo(): string {
        return `${JSON.stringify(this, null, 2)}.`
    }
}

class MyFile {
    constructor(public fileName: string, public content?: string) {
        this.fileName = fileName
        this.content = content
    }

    getInfo(): string {
        return `${this.fileName} ${this.content}`
    }

    setContent(content: string) {
        this.content = content;
    }
}

const folder = new Folder("first folder")

folder.addFile(new MyFile("first file"))

const folder2 = new Folder("second folder")

folder2.addFile(new MyFile("File"))

folder.addFolder(folder2)

console.log(folder.getInfo())