class Publisher {
    constructor() {
        this.subscribers = []
    }

    sendMessage( message ) {
        this.subscribers.forEach(sub => {
            sub.notify( message )
        })
    }

    register( subscriber ) {
        this.subscribers.push(subscriber)
    }
}

class Observer {
    constructor(name) {
        this.name = name
    }
    notify( message ) {
        console.log(`${this.name} receive message: ${message}`);
    }
}

let publisher = new Publisher()

let nick = new Observer("Nick")
let john = new Observer("John")
let mike = new Observer("Mike")

publisher.register(nick)
publisher.register(john)

publisher.sendMessage("Today discount for all products 15%!!!")