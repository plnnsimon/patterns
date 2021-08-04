var BaseDiscount = /** @class */ (function () {
    function BaseDiscount() {
    }
    BaseDiscount.prototype.getDiscount = function (amount) {
        return amount;
    };
    return BaseDiscount;
}());
var PremiumDiscount = /** @class */ (function () {
    function PremiumDiscount() {
    }
    PremiumDiscount.prototype.getDiscount = function (amount) {
        return amount * 0.70;
    };
    return PremiumDiscount;
}());
var PlatinumDiscount = /** @class */ (function () {
    function PlatinumDiscount() {
    }
    PlatinumDiscount.prototype.getDiscount = function (amount) {
        return amount * 0.50;
    };
    return PlatinumDiscount;
}());
var Product = /** @class */ (function () {
    function Product(discount) {
        this.discount = discount;
        this.amount = 0;
    }
    Product.prototype.check = function () {
        return "With discount - " + this.discount.getDiscount(this.amount);
    };
    Product.prototype.setAmount = function (amount) {
        this.amount = amount;
    };
    return Product;
}());
var baseDiscount = new Product(new BaseDiscount());
var premiumDiscount = new Product(new PremiumDiscount());
var platinumDiscount = new Product(new PlatinumDiscount());
baseDiscount.setAmount(1000);
console.log(baseDiscount.check());
premiumDiscount.setAmount(1000);
console.log(premiumDiscount.check());
platinumDiscount.setAmount(1000);
console.log(platinumDiscount.check());
//# sourceMappingURL=strategy.js.map