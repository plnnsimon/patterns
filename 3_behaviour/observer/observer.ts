class Publisher {
    subscribers: Array<Observer>
    constructor() {
        this.subscribers = []
    }

    sendMessage( message: string ): void {
        this.subscribers.forEach(sub => {
            sub.notify( message )
        })
    }

    register( subscriber: Observer ): void {
        this.subscribers.push(subscriber)
    }
}

class Observer {
    constructor(public name: string) {
        this.name = name
    }
    notify( message: string ): void {
        console.log(`${this.name} receive message: ${message}`);
    }
}

let publisher = new Publisher()

let nick = new Observer("Nick")
let john = new Observer("John")

publisher.register(nick)
publisher.register(john)

publisher.sendMessage("Today discount for all products 15%!!!")