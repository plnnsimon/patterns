interface Vehicle {
    accept(visitor: VehicleVisitor): void
}

class Car implements Vehicle {
    constructor(public seats: number, public doors: number) {
        this.seats = seats
        this.doors = doors
    }
    accept(visitor: VehicleVisitor): void {
        visitor.visit(this);
    }
}

class Truck implements Vehicle {
    doors: number
    seats: number
    constructor(public towPackage: boolean) {
        this.seats = 3
        this.towPackage = towPackage;
        this.doors = 2;
    }
    
    accept(visitor: VehicleVisitor): void {
        visitor.visit(this);
    }
}

interface VehicleVisitor {
    visit(vehicle: Vehicle): void
}

class CarVisitor implements VehicleVisitor {
    visit(vehicle: Car): void {
        if(vehicle.seats === 4) {
            console.log("This car is clearly for families");
        } else if (vehicle.seats === 3) {
            console.log("It's most likely a working car ");
        } else {
            console.log("This car is clearly for american youth");
        }
    }
}

class TruckVisitor implements VehicleVisitor {
    visit(vehicle: Truck): void {
        if(vehicle.towPackage) {
            console.log("We need to buy a boat");
        } else {
            console.log("We need a tow package");
        }
    }
}

const myCar = new Car(2, 2)
const myTruck = new Truck(true)

myCar.accept(new CarVisitor())
myCar.accept(new TruckVisitor())

myTruck.accept(new CarVisitor())
myTruck.accept(new TruckVisitor())