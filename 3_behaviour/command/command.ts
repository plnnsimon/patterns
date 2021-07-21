class AndroidRobot {
    commands: Array<Command>
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

abstract class Command {
    uid: number
    constructor() {
        this.uid = Math.floor(Math.random() * 1000)
    }

    execute(): void {}

    undo(): void {}
}

class CleanCommand extends Command {
    constructor(public subject: string) {
        super ()
        this.subject = subject
    }
    execute(): void {
        console.log(`Execute -> Clean Command - UID ${this.uid}: ${this.subject}`);
    }

    undo(): void {
        console.log("Undo -> Clean Command");
    }
}

class MoveCommand extends Command {
    constructor(public direction: string) {
        super ()
        this.direction = direction
    }
    execute(): void {
        console.log(`Execute -> Move Command - UID ${this.uid}: ${this.direction}`);
    }
    undo(): void {
        console.log("Undo -> Move Command");
    }
}

const android = new AndroidRobot()

const cleanCommand = new CleanCommand("room")
const moveCommand = new MoveCommand("kitchen")

android.execute(cleanCommand);
android.execute(moveCommand)


android.undo(cleanCommand);
android.undo(moveCommand)

