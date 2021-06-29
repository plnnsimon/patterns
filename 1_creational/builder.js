/*
    паттерн позвояющий создавать сложные обьекты пошагово, использует один и тот же код для получения разныхпредставлений обьектов
*/

class assaultWeapon {
    constructor() {
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
