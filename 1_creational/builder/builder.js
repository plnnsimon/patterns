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
var Weapon = /** @class */ (function () {
    function Weapon() {
    }
    Weapon.prototype.fire = function () {
        return "tra-ta-ta-ta...";
    };
    Weapon.prototype.reloading = function () {
        return "Reloading...";
    };
    return Weapon;
}());
var AssaultWeapon = /** @class */ (function (_super) {
    __extends(AssaultWeapon, _super);
    function AssaultWeapon() {
        var _this = _super.call(this) || this;
        _this.optic = false;
        _this.laser = false;
        _this.ammunition = 30;
        return _this;
    }
    return AssaultWeapon;
}(Weapon));
var WeaponBuilder = /** @class */ (function () {
    function WeaponBuilder() {
        this.weapon = new AssaultWeapon();
    }
    WeaponBuilder.prototype.addOptic = function (optic) {
        this.weapon.optic = optic;
        return this;
    };
    WeaponBuilder.prototype.addLaser = function (laser) {
        this.weapon.laser = laser;
        return this;
    };
    WeaponBuilder.prototype.changeAmmunition = function (ammunition) {
        this.weapon.ammunition = ammunition;
        return this;
    };
    WeaponBuilder.prototype.changeColor = function (color) {
        this.weapon.color = color;
        return this;
    };
    WeaponBuilder.prototype.build = function () {
        return this.weapon;
    };
    return WeaponBuilder;
}());
var m16 = new WeaponBuilder();
m16.addOptic(true)
    .changeAmmunition(45)
    .changeColor("gold")
    .build();
console.log(m16);
//# sourceMappingURL=builder.js.map