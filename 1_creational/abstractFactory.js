class TransportFactory {
    createBike( brand ) {
        return new Bike( brand )
    }

    createCar( brand ) {
        return new Car( brand )
    }
}

class Bike {
    constructor( brand, speed ) {
        this.type = "Motorbike";
        this.brand = brand;
        this.speed = speed;
    }

    getInfo() {
        return `This is ${this.brand} ${this.type}. Speed - ${this.speed}`
    }
}

class Car {
    constructor( brand, speed ) {
        this.type = "Car";
        this.brand = brand;
        this.speed = speed;
    }

    getInfo() {
        return `This is ${this.brand} ${this.type}. Speed - ${this.speed}`
    }
}

class HondaFactory extends TransportFactory {
    createBike( model ) {
        return new HondaBike( model )
    }

    createCar( model ) {
        return new HondaCar( model )
    }
}

class HondaBike extends Bike {
    constructor( brand ) {
        super( brand )
        this.speed = 280
    }
}

class HondaCar extends Car {
    constructor( brand ) {
        super( brand )
        this.speed = 250
    }
}

class BMWFactory extends TransportFactory {
    createBike( model ) {
        return new BMWBike( model )
    }

    createCar( model ) {
        return new BMWCar( model )
    }
}

class BMWBike extends Bike {
    constructor( brand ) {
        super( brand )
        this.speed = 310
    }
}

class BMWCar extends Car {
    constructor( brand ) {
        super( brand )
        this.speed = 270
    }
}

const toyotaFactory = new HondaFactory()
const bmwFactory = new BMWFactory()

const myCar = toyotaFactory.createCar("Honda");

const myBike = bmwFactory.createBike("BMW")

console.log(myCar.getInfo());
console.log(myBike.getInfo());

