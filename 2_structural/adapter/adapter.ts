class Alien {
    public power: number
    constructor() {
        this.power = 100
    }

    public attack(): number {
        return Math.ceil(Math.random() * 10) + this.power
    }
}

class Human {
    public punch(): number {
        return 30;
    }

    public kick(): number {
        return Math.ceil(Math.random() * this.punch()) + this.punch()
    }
}

class HumanAdapter extends Alien {
    private human: Human
    public power: number
    constructor(human: Human) {
        super()
        this.human = human
        this.power = 30
    }
    public attack(): number {
        return this.human.kick() + this.human.punch() + this.power
    }
}

const alien = new Alien()

const human = new HumanAdapter(new Human)

console.log("Alien attack - " + alien.attack());
console.log("Human attack - " + human.attack());
