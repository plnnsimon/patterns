interface Handler {
    setNext(handler: Handler): Handler
    handle(request: string):string
}

abstract class AbstractHandler implements Handler {
    private nextHandler: Handler
    setNext(handler: Handler): Handler {
        this.nextHandler = handler
        return handler
    }
    handle(request: string): string {
        if (this.nextHandler) {
            return this.nextHandler.handle(request)
        }
        return null
    }
    
}

class CatHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "Wiskas") {
            return `Cat: I'll eat the ${request}`
        }
        return super.handle(request)
    }
}

class DogHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "Bone") {
            return `Dog: I'll eat the ${request}`
        }
        return super.handle(request)
    }
}

class HamsterHandler extends AbstractHandler {
    handle(request: string): string {
        if (request === "Corn") {
            return `Hamster: I'll eat the ${request}`
        }
        return super.handle(request)
    }
}

const cat = new CatHandler()
const dog = new DogHandler()
const hamster = new HamsterHandler()

cat.setNext(dog).setNext(hamster)

function test(handler: Handler) {
    const foods = ['Wiskas', 'Bone', 'Nuts', 'Corn']
    for (let food of foods) {
        console.log(`Who wants ${food}`);
        
        let result = handler.handle(food)
        if (result) {
            console.log(` ${result}`);
        } else {
            console.log(` ${food} was left untouched`);
        }
    }
}

test(cat)
console.log('=======');
test(dog)