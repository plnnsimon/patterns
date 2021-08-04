var Circle = /** @class */ (function () {
    function Circle(color) {
        this.color = color;
        this.x = 0;
        this.y = 0;
        this.radius = 0;
    }
    Circle.prototype.setX = function (x) {
        this.x = x;
    };
    Circle.prototype.setY = function (y) {
        this.y = y;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.draw = function () {
        console.log("Draw circle: color: " + this.color + ", position(X:" + this.x + ", Y:" + this.y + "), radius: " + this.radius);
    };
    return Circle;
}());
var CirclesFactory = /** @class */ (function () {
    function CirclesFactory() {
    }
    CirclesFactory.getCircle = function (color) {
        var circle = this.circles.filter(function (el) { return el.color == color; });
        if (circle.length > 0) {
            console.log("FROM CASH");
            return circle[0];
        }
        var newCircle = new Circle(color);
        console.log("New circle created");
        this.circles.push(newCircle);
        return newCircle;
    };
    CirclesFactory.circles = [];
    return CirclesFactory;
}());
var FlyweightDemo = /** @class */ (function () {
    function FlyweightDemo() {
        this.colors = ['Red', 'Green', "Blue", 'Black'];
    }
    FlyweightDemo.prototype.main = function () {
        var circle = CirclesFactory.getCircle(this.getRandomColor());
        circle.setX(this.getRandomX());
        circle.setY(this.getRandomY());
        circle.setRadius(Math.floor(Math.random() * 10));
        circle.draw();
    };
    FlyweightDemo.prototype.getRandomColor = function () {
        return this.colors[Math.floor(Math.random() * this.colors.length)];
    };
    FlyweightDemo.prototype.getRandomX = function () {
        return Math.floor(Math.random() * 10);
    };
    FlyweightDemo.prototype.getRandomY = function () {
        return Math.floor(Math.random() * 10);
    };
    return FlyweightDemo;
}());
var flyweight = new FlyweightDemo();
for (var i = 0; i < 20; i++) {
    flyweight.main();
}
//# sourceMappingURL=flyweight.js.map