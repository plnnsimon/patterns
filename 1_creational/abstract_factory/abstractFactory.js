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
var Bike = /** @class */ (function () {
    function Bike() {
    }
    Bike.prototype.getInfo = function () {
        return "This is " + this.brand + " " + this.type + ". Speed - " + this.speed;
    };
    return Bike;
}());
var Car = /** @class */ (function () {
    function Car() {
    }
    Car.prototype.getInfo = function () {
        return "This is " + this.brand + " " + this.type + ". Speed - " + this.speed;
    };
    return Car;
}());
var HondaFactory = /** @class */ (function () {
    function HondaFactory() {
    }
    HondaFactory.prototype.createBike = function () {
        return new HondaBike();
    };
    HondaFactory.prototype.createCar = function () {
        return new HondaCar();
    };
    return HondaFactory;
}());
var HondaBike = /** @class */ (function (_super) {
    __extends(HondaBike, _super);
    function HondaBike() {
        var _this = _super.call(this) || this;
        _this.brand = "Honda";
        _this.speed = 280;
        _this.type = "Bike";
        return _this;
    }
    return HondaBike;
}(Bike));
var HondaCar = /** @class */ (function (_super) {
    __extends(HondaCar, _super);
    function HondaCar() {
        var _this = _super.call(this) || this;
        _this.brand = "Honda";
        _this.speed = 250;
        _this.type = "Car";
        return _this;
    }
    return HondaCar;
}(Car));
var BMWFactory = /** @class */ (function () {
    function BMWFactory() {
    }
    BMWFactory.prototype.createBike = function () {
        return new BMWBike();
    };
    BMWFactory.prototype.createCar = function () {
        return new BMWCar();
    };
    return BMWFactory;
}());
var BMWBike = /** @class */ (function (_super) {
    __extends(BMWBike, _super);
    function BMWBike() {
        var _this = _super.call(this) || this;
        _this.brand = "BMW";
        _this.speed = 270;
        _this.type = "Bike";
        return _this;
    }
    return BMWBike;
}(Bike));
var BMWCar = /** @class */ (function (_super) {
    __extends(BMWCar, _super);
    function BMWCar() {
        var _this = _super.call(this) || this;
        _this.brand = "BMW";
        _this.speed = 260;
        _this.type = "Car";
        return _this;
    }
    return BMWCar;
}(Car));
var hondaFactory = new HondaFactory();
var bmwFactory = new BMWFactory();
var myCar = hondaFactory.createCar();
var myBike = bmwFactory.createBike();
console.log(myCar.getInfo());
console.log(myBike.getInfo());
//# sourceMappingURL=abstractFactory.js.map