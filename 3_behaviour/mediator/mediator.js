class User {
    constructor(name,userId) {
      this.name = name
      this.userId = userId
      this.chat = null;
    }

    sendMessage(message, sendTo) {
      this.chat.send(message, this, sendTo)
    }

    receiveMessage(message, receiveFrom) {
      console.log(`${receiveFrom.name} sent the message to ${this.name}: ${message}`)
    }
}
  
class Chat {
    constructor() {
        this.users = []
    }

    register(user) {
        this.users[user.userId] = user
        user.chat = this;
    }

    send(message, receiveFrom, sendTo) {
        sendTo.receiveMessage(message, receiveFrom);    
    }
}
 
var chat = new Chat();
var user1 = new User("User1", new Date());
var user2 = new User("User2", new Date());

chat.register(user1);
chat.register(user2);

user1.sendMessage("Hey", user2);
user2.sendMessage("Hello", user1);