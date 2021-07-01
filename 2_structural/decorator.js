/*
    структурный паттерн проектирования позволяющий обьектам динамически добавлять новую функциональность
*/

class Player {
    constructor(name) {
        this.name = name
        this.level = 1
        this.equipment = []
    }

    getInfo() {
        return `Player ${this.name} has ${this.level} level`
    }
}

const weapon = player => {
    player.level += 1;
    player.equipment.push("weapon");
};

const armor = player => {
    player.level += 1;
    player.equipment.push("armor");
};

const player1 = new Player("Alex");

weapon(player1);

armor(player1)

console.log(player1.getInfo());

console.log(player1.equipment);
