class AndroidRobot {
    constructor() {
        this.commands = [];
    }
    execute(command, comments = undefined) {
        this.commands.push(command)
        command.execute(comments)
    }
    undo(command) {
        command.undo();
    }
    listCommands() {
        return this.commands.reduce((acc, curr) => acc + curr.toString() + "\n", "")
    }
}

class Command {
    constructor() {
        this.uid = Math.floor(Math.random() * 1000)
    }

    toString() {
        return `Android: command UID: ${this.uid}`
    }

    execute(args) {}

    undo(args) {}
}

class CleanCommand extends Command {
    constructor(service) {
        super()
        this.service = service
    }

    execute() {
        console.log("Execute -> Clean Command");
        this.service.clean();
    }

    undo() {
        console.log("Undo -> Clean Command");
        this.service.stop();
    }
}

class MoveCommand extends Command {
    constructor(service) {
        super()
        this.service = service;
    }
    execute(direction) {
        console.log("Execute -> Move Command");
        this.service.move(direction)
    }
    undo() {
        console.log("Undo -> Move Command");
        this.service.stop();
    }
}

class AndroidService {
    constructor() {}
    clean() {
        console.log("SERVICE -> Clean ");
    }

    move(direction) {
        console.log("SERVICE -> Move: ", direction);
    }

    stop() {
        console.log("SERVICE -> Stop");
    }
}

const android = new AndroidRobot()
const androidService = new AndroidService()

const cleanCommand = new CleanCommand(androidService)
const moveCommand = new MoveCommand(androidService)

android.execute(cleanCommand);
android.execute(moveCommand, "kitchen")

console.log(android.listCommands())

android.undo(cleanCommand);
android.undo(moveCommand)

console.log(android.listCommands());

