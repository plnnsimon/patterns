class User {
    chat: Chat
    userId: number
    constructor(public name: string) {
      this.name = name
      this.userId = Math.floor(Math.random() * 100)
      this.chat = new Chat();
    }

    sendMessage(message: string, sendTo: User): void {
      this.chat.send(message, this, sendTo)
    }

    receiveMessage(message: string, receiveFrom: User): void {
      console.log(`${receiveFrom.name} sent the message to ${this.name}: ${message}`)
    }
}
  
class Chat {
    users: Array<User>
    constructor() {
        this.users = []
    }

    register(user: User): void {
        this.users[user.userId] = user
        user.chat = this;
    }

    send(message: string, receiveFrom: User, sendTo: User): void {
        sendTo.receiveMessage(message, receiveFrom);    
    }
}
 
var chat = new Chat();
var user1 = new User("User1");
var user2 = new User("User2");

chat.register(user1);
chat.register(user2);

user1.sendMessage("Hey", user2);
user2.sendMessage("Hello", user1);