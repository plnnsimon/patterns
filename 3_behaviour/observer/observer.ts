class Publisher {
    private subscribers: Observer[] = []
    constructor() {
        this.subscribers = []
    }

    sendMessage( message: string ): void {
        this.subscribers.forEach(sub => {
            sub.update( message )
        })
    }

    register( observer: Observer ): void {
        const isExist = this.subscribers.includes(observer)
        if (isExist) {
            return console.log('Subscriber has been registered');
        }
        this.subscribers.push(observer)
        console.log('Subscriber registered successfully');
    }

    unregister( observer: Observer ): void {
        const observerIndex = this.subscribers.indexOf(observer)
        if (observerIndex === -1) {
            return console.log("Nonexistent observer");
        }
        this.subscribers.filter(el => el != observer)
        console.log('Observer has been unregistered');
    }
}

interface Observer {
    update( message: string ): void
}

class ConcreteObserver implements Observer {
    constructor(public name: string) {
        this.name = name
    }
    update( message: string ): void {
        console.log(`${this.name} receive message: ${message}`);
    }
}

let publisher = new Publisher()

let nick = new ConcreteObserver("Nick")
let john = new ConcreteObserver("John")

publisher.register(nick)
publisher.register(john)

publisher.sendMessage("Today discount for all products 15%!!!")