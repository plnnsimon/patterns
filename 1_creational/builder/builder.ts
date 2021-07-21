class Weapon {
    fire(): string {
        return "tra-ta-ta-ta..."
    }

    reloading(): string {
        return "Reloading..."
    }
}

class AssaultWeapon extends Weapon {
    optic: boolean
    laser: boolean
    ammunition: number
    [propName: string]: any
    constructor() {
        super()
        this.optic = false
        this.laser = false
        this.ammunition = 30
        
    }
}

class WeaponBuilder {
    private weapon: AssaultWeapon

    constructor() {
        this.weapon = new AssaultWeapon()
    }

    addOptic(optic: boolean): WeaponBuilder {
        this.weapon.optic = optic;
        return this;
    }

    addLaser(laser: boolean): WeaponBuilder {
        this.weapon.laser = laser;
        return this;
    }

    changeAmmunition(ammunition: number): WeaponBuilder {
        this.weapon.ammunition = ammunition;
        return this;
    }

    changeColor(color: string): WeaponBuilder {
        this.weapon.color = color;
        return this;
    }

    build(): AssaultWeapon {
        return this.weapon;
    }
}

const m16 = new WeaponBuilder();

m16.addOptic(true)
   .changeAmmunition(45)
   .changeColor("gold")
   .build();

console.log(m16);