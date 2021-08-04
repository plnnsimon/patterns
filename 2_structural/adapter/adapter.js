var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Alien = /** @class */ (function () {
    function Alien() {
        this.power = 100;
    }
    Alien.prototype.attack = function () {
        return Math.ceil(Math.random() * 10) + this.power;
    };
    return Alien;
}());
var Human = /** @class */ (function () {
    function Human() {
    }
    Human.prototype.punch = function () {
        return 30;
    };
    Human.prototype.kick = function () {
        return Math.ceil(Math.random() * this.punch()) + this.punch();
    };
    return Human;
}());
var HumanAdapter = /** @class */ (function (_super) {
    __extends(HumanAdapter, _super);
    function HumanAdapter(human) {
        var _this = _super.call(this) || this;
        _this.human = human;
        _this.power = 30;
        return _this;
    }
    HumanAdapter.prototype.attack = function () {
        return this.human.kick() + this.human.punch() + this.power;
    };
    return HumanAdapter;
}(Alien));
var alien = new Alien();
var human = new HumanAdapter(new Human);
console.log("Alien attack - " + alien.attack());
console.log("Human attack - " + human.attack());
//# sourceMappingURL=adapter.js.map