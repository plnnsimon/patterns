class Warrior {
    constructor(power) {
        this.power = power
    }

    attack() {}
}

class Elf extends Warrior  {
    constructor(power) {
        super(power)
        this.power = 50
    }

    attack() {
        return Math.ceil(Math.random() * 10) + this.power;
    }
}

class Orc extends Warrior  {
    constructor(power) {
        super(power)
        this.power = 60
    }

    attack() {
        return Math.ceil(Math.random() * 10) + this.power;
    }
}

class Human {
    punch() {
        return 10;
    }

    kick() {
        return Math.ceil(Math.random() * this.punch()) + this.punch();
    }
}

class HumanAdapter {
    constructor() {
        this.power = 30
        this.human = new Human()
    }

    attack() {
        return this.human.kick() + this.human.punch() + this.power
    }
}

const orc = new Orc()
const elf = new Elf()
const human = new HumanAdapter(new Human())

console.log("Orc attack - " + orc.attack());
console.log("Elf attack - " + elf.attack());
console.log("Human attack - " + human.attack());