class Player {
    constructor(name) {
        this.name = name
        this.level = 1
        this.equipment = []
    }

    getInfo() {
        return `Player ${this.name} has level ${this.level}`
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

const poison = player => {
    player.level += 5;
    console.log("Power On");
    setTimeout(function () {
        console.log("Power Off");
        player.level -= 5;
    }, 5000)
}

const player1 = new Player("Alex");

const death = player => {
    player.level = 1
    player.equipment.splice(0, player.equipment.length)
}

weapon(player1);

armor(player1);

// death(player1);

poison(player1);

console.log(player1.getInfo());

console.log(player1.equipment);
