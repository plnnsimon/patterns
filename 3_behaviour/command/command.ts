class AndroidRobot {
    private commands: Array<Command>
    constructor() {
        this.commands = [];
    }
    execute(command: Command): void {
        command.execute()
        this.commands.push(command)
    }
    undo(command: Command): void {
        command.undo();
    }
}

interface Command {
    uid: number
    execute(): void
    undo(): void
}

class CleanCommand implements Command {
    uid: number
    constructor(public object: string) {
        this.object = object
        this.uid = Math.floor(Math.random() * 1000)
    }
    execute(): void {
        console.log(`Execute -> Clean Command - UID ${this.uid}; object: ${this.object}`);
    }

    undo(): void {
        console.log("Undo -> Clean Command");
    }
}

class MoveCommand implements Command {
    uid: number
    constructor(public direction: string) {
        this.direction = direction
        this.uid = Math.floor(Math.random() * 1000)
    }
    execute(): void {
        console.log(`Execute -> Move Command - UID ${this.uid}; direction: ${this.direction}`);
    }
    undo(): void {
        console.log("Undo -> Move Command");
    }
}

const android = new AndroidRobot()

const cleanCommand = new CleanCommand("room")
const moveCommand = new MoveCommand("kitchen")

android.execute(cleanCommand);
android.undo(cleanCommand);

android.execute(moveCommand)
android.undo(moveCommand)

