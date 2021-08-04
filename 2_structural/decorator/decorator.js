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
var SimplePlayer = /** @class */ (function () {
    function SimplePlayer() {
        this.level = 1;
        this.power = 1;
    }
    SimplePlayer.prototype.getInfo = function () {
        return "Simple player with " + this.level + " level and with " + this.power + " power points";
    };
    SimplePlayer.prototype.simpleKick = function () {
        return this.power + 1;
    };
    SimplePlayer.prototype.middleKick = function () {
        return this.power + 3;
    };
    return SimplePlayer;
}());
var MiddlePlayer = /** @class */ (function () {
    function MiddlePlayer() {
        this.level = 5;
        this.power = 5;
    }
    MiddlePlayer.prototype.getInfo = function () {
        return "Middle player with " + this.level + " level and with " + this.power + " power points";
    };
    MiddlePlayer.prototype.simpleKick = function () {
        return this.power + 3;
    };
    MiddlePlayer.prototype.middleKick = function () {
        return this.power + 5;
    };
    return MiddlePlayer;
}());
var PlayerEquipment = /** @class */ (function () {
    function PlayerEquipment(player) {
        this.decoratedPlayer = player;
    }
    PlayerEquipment.prototype.getInfo = function () {
        return this.decoratedPlayer.getInfo();
    };
    PlayerEquipment.prototype.simpleKick = function () {
        return this.decoratedPlayer.simpleKick();
    };
    PlayerEquipment.prototype.middleKick = function () {
        return this.decoratedPlayer.middleKick();
    };
    return PlayerEquipment;
}());
var SimpleWeapon = /** @class */ (function (_super) {
    __extends(SimpleWeapon, _super);
    function SimpleWeapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SimpleWeapon.prototype.getInfo = function () {
        return this.decoratedPlayer.getInfo() + " with simple weapon";
    };
    SimpleWeapon.prototype.simpleKick = function () {
        return _super.prototype.simpleKick.call(this) + 1;
    };
    SimpleWeapon.prototype.middleKick = function () {
        return _super.prototype.middleKick.call(this) + 3;
    };
    return SimpleWeapon;
}(PlayerEquipment));
var MiddleWeapon = /** @class */ (function (_super) {
    __extends(MiddleWeapon, _super);
    function MiddleWeapon() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MiddleWeapon.prototype.getInfo = function () {
        return this.decoratedPlayer.getInfo() + " with middle weapon";
    };
    MiddleWeapon.prototype.simpleKick = function () {
        return _super.prototype.simpleKick.call(this) + 3;
    };
    MiddleWeapon.prototype.middleKick = function () {
        return _super.prototype.middleKick.call(this) + 5;
    };
    return MiddleWeapon;
}(PlayerEquipment));
var simplePlayer = new SimplePlayer();
simplePlayer = new SimpleWeapon(simplePlayer);
var middlePlayer = new MiddlePlayer();
middlePlayer = new MiddleWeapon(middlePlayer);
console.log(simplePlayer.getInfo());
console.log(middlePlayer.getInfo());
console.log(middlePlayer.middleKick());
console.log(simplePlayer.middleKick());
//# sourceMappingURL=decorator.js.map