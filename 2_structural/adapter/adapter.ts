interface Warrior {
    power: number 
    attack: Function;
}

class Elf implements Warrior {
    public power: number
    constructor() {
        this.power = 50
    }

    public attack(): number {
        return Math.ceil(Math.random() * 10) + this.power
    }
}

class Orc implements Warrior {
    public power: number
    constructor() {
        this.power = 60
    }

    public attack(): number {
        return Math.ceil(Math.random() * 10) + this.power
    }
}

class Human {
    public punch(): number {
        return 10;
    }

    public kick(): number {
        return Math.ceil(Math.random() * this.punch()) + this.punch()
    }
}

class HumanAdapter implements Warrior {
    private human: Human
    public power: number
    constructor(human: Human) {
        this.human = human
        this.power = 30
    }
    public attack(): number {
        return this.human.kick() + this.human.punch() + this.power
    }
}

const orc = new Orc()

const elf = new Elf()

const human = new HumanAdapter(new Human)

console.log("Orc attack - " + orc.attack());
console.log("Elf attack - " + elf.attack());
console.log("Human attack - " + human.attack());
