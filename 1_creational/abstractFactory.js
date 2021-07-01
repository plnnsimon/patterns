function TransportFactory(brand) {
    switch(brand) {
        case "BMW": 
            return new BMWFactory(brand);
        case "HONDA":
            return new HondaFactory(brand);
    }
}

class BMWFactory {
    constructor(brand) {
        this.brand = brand
    }
    create(type) {
        return type === "bike" ? new Bike(this.brand) : new Car(this.brand);
    }
}

class HondaFactory {
    constructor(brand) {
        this.brand = brand
    }
    create(type) {
        return type === "bike" ? new Bike(this.brand) : new Car(this.brand);
    }
}

class Car { 
    constructor(brand) {
        this.brand = brand
        this.wheels = 4
        this.cost = 10000
    }

    start() {
        return "Engine started";
    }

    stop() {
        return "Engine stopped";
    }
}

class Bike { 
    constructor(brand) {
        this.brand = brand
        this.wheels = 2
        this.cost = 5000
    }

    start() {
        return "Engine started";
    }

    stop() {
        return "Engine stopped";
    }
}

const transport = TransportFactory("BMW");

const myBike = transport.create("bike")

console.log(myBike);

const myCar = transport.create("car")

console.log(myCar.start());