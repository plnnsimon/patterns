interface TransportFactory {
    createBike(): Bike;
    createCar(): Car;
}

abstract class Bike {
    brand: string
    speed: number
    type: string
    getInfo(): string {
        return `This is ${this.brand} ${this.type}. Speed - ${this.speed}`
    }
}

abstract class Car {
    brand: string;
    speed: number;
    type: string;
    getInfo(): string {
        return `This is ${this.brand} ${this.type}. Speed - ${this.speed}`
    }
}

class HondaFactory implements TransportFactory {
    public createBike(): Bike {
        return new HondaBike();
    }

    public createCar(): Car {
        return new HondaCar();
    }
}

class HondaBike extends Bike {
    constructor() {
        super();
        this.brand = "Honda"
        this.speed = 280
        this.type = "Bike"
    }

}

class HondaCar extends Car {
    constructor() {
        super()
        this.brand = "Honda"
        this.speed = 250
        this.type = "Car"
    }
}

class BMWFactory implements TransportFactory {
    public createBike(): Bike {
        return new BMWBike();
    }

    public createCar(): Car {
        return new BMWCar();
    }
}

class BMWBike extends Bike {
    constructor() {
        super();
        this.brand = "BMW"
        this.speed = 270
        this.type = "Bike"
    }
}

class BMWCar extends Car {
    constructor() {
        super()
        this.brand = "BMW"
        this.speed = 260
        this.type = "Car"
    }
}

const hondaFactory = new HondaFactory()
const bmwFactory = new BMWFactory()

const myCar = hondaFactory.createCar();

const myBike = bmwFactory.createBike();

console.log(myCar.getInfo());
console.log(myBike.getInfo());