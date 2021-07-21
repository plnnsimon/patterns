class Game {
    constructor() {
        console.log("New game created");
    }

    save(state) {
        return new GameMemento(state)
    }

    download(GameMemento) {
        this.state = GameMemento.getState();
        console.log('State = ' + this.state)
    }
}

class GameMemento {
    constructor(state) {
        this.state = state
    }

    getState() {
        return this.state
    }

    setState(state) {
        this.state = state
    } 
}


class Save {
    constructor() {
        console.log("Saves created");
        this.saveValues = []
    }

    addSave(saveName) {
        this.saveValues.push(saveName);
        console.log(`Save ${JSON.stringify(saveName)} created successfully`);
    }

    getSave(index) {
        if (index === undefined) {
            console.log("Choose save");
            return this.saveValues
        }
        return this.saveValues[index - 1]
    }
}

let game = new Game();

let saves = new Save()

const mySave = game.save('first save')

saves.addSave(mySave)
saves.addSave(game.save('second save'))
saves.addSave(game.save('third save'))

game.download(saves.getSave(3))
