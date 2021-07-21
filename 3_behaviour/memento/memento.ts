class Game {
    private state: string
    constructor() {
        this.state = ''
        console.log("New game created");
    }

    save(state: string): GameMemento {
        return new GameMemento(state)
    }

    download(GameMemento: GameMemento): void {
        this.state = GameMemento.getState();
        console.log('State = ' + this.state)
    }
}

class GameMemento {
    constructor(public state: string) {
        this.state = state
    }

    getState(): string {
        return this.state
    }

    setState(state: string): void {
        this.state = state
    } 
}


class Save {
    saveValues: Array<GameMemento>
    constructor() {
        console.log("Saves created");
        this.saveValues = []
    }

    addSave(game: GameMemento): void {
        this.saveValues.push(game);
        console.log(`Save "${game.state}" created successfully`);
    }

    getSave(index: number): any {
        return this.saveValues[index - 1]
    }
}

let game = new Game();

let saves = new Save()

const mySave = game.save("first save")

saves.addSave(mySave)
saves.addSave(game.save('second save'))
saves.addSave(game.save('third save'))

game.download(saves.getSave(2))
