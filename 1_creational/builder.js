class Weapon {
    fire() {
        console.log("tra-ta-ta-ta");
    }

    reloading() {
        console.log("Reloading...");
    }
}

class assaultWeapon extends Weapon {
    constructor() {
        super()
        this.optic = false
        this.laser = false
        this.ammunition = 30
    }
}

class WeaponBuilder {
    constructor() {
        this.weapon = new assaultWeapon();
    }

    addOptic(optic) {
        this.weapon.optic = optic;
        return this;
    }

    addLaser(laser) {
        this.weapon.laser = laser;
        return this;
    }

    changeAmmunition(ammunition) {
        this.weapon.ammunition = ammunition;
        return this;
    }

    changeColor(color) {
        this.weapon.color = color;
        return this;
    }

    build() {
        return this.weapon;
    }
}

const m16 = new WeaponBuilder();

m16.addOptic(true)
   .changeAmmunition(45)
   .changeColor("gold")
   .build();

console.log(m16);
