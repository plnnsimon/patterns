var Elf = /** @class */ (function () {
    function Elf() {
        this.power = 50;
    }
    Elf.prototype.attack = function () {
        return Math.ceil(Math.random() * 10) + this.power;
    };
    return Elf;
}());
var Orc = /** @class */ (function () {
    function Orc() {
        this.power = 60;
    }
    Orc.prototype.attack = function () {
        return Math.ceil(Math.random() * 10) + this.power;
    };
    return Orc;
}());
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.punch = function () {
        return 10;
    };
    Human.prototype.kick = function () {
        return Math.ceil(Math.random() * this.punch()) + this.punch();
    };
    return Human;
}());
var HumanAdapter = /** @class */ (function () {
    function HumanAdapter(human) {
        this.human = human;
        this.power = 30;
    }
    HumanAdapter.prototype.attack = function () {
        return this.human.kick() + this.human.punch() + this.power;
    };
    return HumanAdapter;
}());
var orc = new Orc();
var elf = new Elf();
var human = new HumanAdapter(new Human);
console.log("Orc attack - " + orc.attack());
console.log("Elf attack - " + elf.attack());
console.log("Human attack - " + human.attack());
