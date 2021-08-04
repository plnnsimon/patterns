var Game = /** @class */ (function () {
    function Game() {
        this.state = '';
        console.log("New game created");
    }
    Game.prototype.save = function (state) {
        return new GameMemento(state);
    };
    Game.prototype.download = function (memento) {
        this.state = memento.getState();
        console.log('Save - ' + this.state);
    };
    return Game;
}());
var GameMemento = /** @class */ (function () {
    function GameMemento(state) {
        this.state = state;
    }
    GameMemento.prototype.getState = function () {
        return this.state;
    };
    GameMemento.prototype.setState = function (state) {
        this.state = state;
    };
    return GameMemento;
}());
var Save = /** @class */ (function () {
    function Save() {
        this.saveValues = [];
        console.log("Saves created");
        this.saveValues = [];
    }
    Save.prototype.addSave = function (game) {
        this.saveValues.push(game);
        console.log("Save \"" + game.getState() + "\" created successfully");
    };
    Save.prototype.getSave = function (index) {
        return this.saveValues[index - 1];
    };
    return Save;
}());
var game = new Game();
var saves = new Save();
var mySave = game.save("first save");
saves.addSave(mySave);
saves.addSave(game.save('second save'));
saves.addSave(game.save('third save'));
game.download(saves.getSave(1));
//# sourceMappingURL=memento.js.map