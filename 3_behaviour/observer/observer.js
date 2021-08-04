var Publisher = /** @class */ (function () {
    function Publisher() {
        this.subscribers = [];
        this.subscribers = [];
    }
    Publisher.prototype.sendMessage = function (message) {
        this.subscribers.forEach(function (sub) {
            sub.update(message);
        });
    };
    Publisher.prototype.register = function (observer) {
        var isExist = this.subscribers.includes(observer);
        if (isExist) {
            return console.log('Subscriber has been registered');
        }
        this.subscribers.push(observer);
        console.log('Subscriber registered successfully');
    };
    Publisher.prototype.unregister = function (observer) {
        var observerIndex = this.subscribers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log("Nonexistent observer");
        }
        this.subscribers.filter(function (el) { return el != observer; });
        console.log('Observer has been unregistered');
    };
    return Publisher;
}());
var ConcreteObserver = /** @class */ (function () {
    function ConcreteObserver(name) {
        this.name = name;
        this.name = name;
    }
    ConcreteObserver.prototype.update = function (message) {
        console.log(this.name + " receive message: " + message);
    };
    return ConcreteObserver;
}());
var publisher = new Publisher();
var nick = new ConcreteObserver("Nick");
var john = new ConcreteObserver("John");
publisher.register(nick);
publisher.register(john);
publisher.sendMessage("Today discount for all products 15%!!!");
//# sourceMappingURL=observer.js.map