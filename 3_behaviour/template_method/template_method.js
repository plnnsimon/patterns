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
var Sandwich = /** @class */ (function () {
    function Sandwich() {
        this.meat = ["Salami", "Pepperoni", "Ham"];
        this.cheese = ["Radomer", "Cheder"];
        this.vegetables = ["Tomato", "Salade", "Onion"];
    }
    Sandwich.prototype.makeSandwich = function () {
        this.cutBread();
        this.putBread();
        if (this.customerWantsMeat()) {
            this.addMeat();
        }
        if (this.customerWantsCheese()) {
            this.addCheese();
        }
        if (this.customerWantsVegetables()) {
            this.addVegetables();
        }
        this.wrapTheSandwich();
    };
    Sandwich.prototype.cutBread = function () {
        console.log("Bread cut");
    };
    Sandwich.prototype.putBread = function () {
        console.log("Bread added");
    };
    ;
    Sandwich.prototype.addMeat = function () {
        console.log("Adding meat: ");
        this.meat.forEach(function (meat) { return console.log(meat); });
    };
    Sandwich.prototype.addCheese = function () {
        console.log("Adding cheese: ");
        this.cheese.forEach(function (cheese) { return console.log(cheese); });
    };
    Sandwich.prototype.addVegetables = function () {
        console.log("Adding vegetables: ");
        this.vegetables.forEach(function (vegetable) { return console.log(vegetable); });
    };
    return Sandwich;
}());
var ItalianSandwich = /** @class */ (function (_super) {
    __extends(ItalianSandwich, _super);
    function ItalianSandwich() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ItalianSandwich.prototype.customerWantsMeat = function () { return true; };
    ItalianSandwich.prototype.customerWantsCheese = function () { return true; };
    ItalianSandwich.prototype.customerWantsVegetables = function () { return true; };
    ItalianSandwich.prototype.wrapTheSandwich = function () {
        console.log("Italian sandwich is ready!!!");
    };
    return ItalianSandwich;
}(Sandwich));
var VegetarianSandwich = /** @class */ (function (_super) {
    __extends(VegetarianSandwich, _super);
    function VegetarianSandwich() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    VegetarianSandwich.prototype.customerWantsMeat = function () { return false; };
    VegetarianSandwich.prototype.customerWantsCheese = function () { return true; };
    VegetarianSandwich.prototype.customerWantsVegetables = function () { return true; };
    VegetarianSandwich.prototype.wrapTheSandwich = function () {
        console.log("Vegetarian sandwich is ready!!!");
    };
    return VegetarianSandwich;
}(Sandwich));
var italianSandwich = new ItalianSandwich();
italianSandwich.makeSandwich();
console.log("======");
var vegetarianSandwich = new VegetarianSandwich();
vegetarianSandwich.makeSandwich();
//# sourceMappingURL=template_method.js.map