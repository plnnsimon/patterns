var Folder = /** @class */ (function () {
    function Folder(folderName) {
        this.folderName = folderName;
        this.folderName = folderName;
        this.folder = [];
    }
    Folder.prototype.addFile = function (file) {
        this.folder.push(file);
    };
    Folder.prototype.addFolder = function (folder) {
        this.folder.push(folder);
    };
    Folder.prototype.getInfo = function () {
        return JSON.stringify(this, null, 2) + ".";
    };
    return Folder;
}());
var MyFile = /** @class */ (function () {
    function MyFile(fileName, content) {
        this.fileName = fileName;
        this.content = content;
        this.fileName = fileName;
        this.content = content;
    }
    MyFile.prototype.getInfo = function () {
        return this.fileName + " " + this.content;
    };
    MyFile.prototype.setContent = function (content) {
        this.content = content;
    };
    return MyFile;
}());
var folder = new Folder("first folder");
folder.addFile(new MyFile("first file"));
var folder2 = new Folder("second folder");
folder2.addFile(new MyFile("File"));
folder.addFolder(folder2);
console.log(folder.getInfo());
//# sourceMappingURL=composite.js.map