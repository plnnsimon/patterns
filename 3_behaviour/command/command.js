var AndroidRobot = /** @class */ (function () {
    function AndroidRobot() {
        this.commands = [];
    }
    AndroidRobot.prototype.execute = function (command) {
        command.execute();
        this.commands.push(command);
    };
    AndroidRobot.prototype.undo = function (command) {
        command.undo();
    };
    return AndroidRobot;
}());
var CleanCommand = /** @class */ (function () {
    function CleanCommand(object) {
        this.object = object;
        this.object = object;
        this.uid = Math.floor(Math.random() * 1000);
    }
    CleanCommand.prototype.execute = function () {
        console.log("Execute -> Clean Command - UID " + this.uid + "; object: " + this.object);
    };
    CleanCommand.prototype.undo = function () {
        console.log("Undo -> Clean Command");
    };
    return CleanCommand;
}());
var MoveCommand = /** @class */ (function () {
    function MoveCommand(direction) {
        this.direction = direction;
        this.direction = direction;
        this.uid = Math.floor(Math.random() * 1000);
    }
    MoveCommand.prototype.execute = function () {
        console.log("Execute -> Move Command - UID " + this.uid + "; direction: " + this.direction);
    };
    MoveCommand.prototype.undo = function () {
        console.log("Undo -> Move Command");
    };
    return MoveCommand;
}());
var android = new AndroidRobot();
var cleanCommand = new CleanCommand("room");
var moveCommand = new MoveCommand("kitchen");
android.execute(cleanCommand);
android.undo(cleanCommand);
android.execute(moveCommand);
android.undo(moveCommand);
//# sourceMappingURL=command.js.map