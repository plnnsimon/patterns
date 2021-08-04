var User = /** @class */ (function () {
    function User(name) {
        this.name = name;
        this.name = name;
        this.userId = Math.floor(Math.random() * 100);
        this.chat = new Chat();
    }
    User.prototype.sendMessage = function (message, sendTo) {
        this.chat.send(message, this, sendTo);
    };
    User.prototype.receiveMessage = function (message, receiveFrom) {
        console.log(receiveFrom.name + " send message to " + this.name + ": " + message);
    };
    return User;
}());
var Chat = /** @class */ (function () {
    function Chat() {
        this.users = [];
    }
    Chat.prototype.register = function (user) {
        this.users[user.userId] = user;
        user.chat = this;
    };
    Chat.prototype.send = function (message, receiveFrom, sendTo) {
        sendTo.receiveMessage(message, receiveFrom);
    };
    return Chat;
}());
var chat = new Chat();
var user1 = new User("User1");
var user2 = new User("User2");
chat.register(user1);
chat.register(user2);
user1.sendMessage("Hey", user2);
user2.sendMessage("Hello", user1);
//# sourceMappingURL=mediator.js.map