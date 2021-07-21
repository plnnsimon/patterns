class Ship {
    constructor (public name: string, public speed: number, public size: number) {
        this.name = name
        this.speed = speed
        this.size = size
    }
    accept(visitor: any): void {
        visitor.visit(this);
    };
  
    getName(): string {
        return this.name;
    };
  
    getSpeed(): number{
        return this.speed;
    };
  
    setSpeed(speed: number) {
        this.speed = speed;
    };
  
    getSize(): number{
        return this.size;
    };
  
    setSize(size: number) {
        this.size = size;
    };
};
     
class ShipSpeedUp {
    visit(ship: Ship): void {
        ship.setSpeed(ship.getSpeed() * 2.5);
        console.log(`${ship.name} speed is up to - ${ship.getSpeed()}`);
    };
}
 
class ShipEnlarge {
    visit(ship: Ship): void {
        ship.setSize(ship.getSize() * 2)
        console.log(`${ship.name} large is up to - ${ship.getSize()}`);
    };
}

const ship = new Ship("Tanker", 30, 320)

ship.accept(new ShipSpeedUp())
ship.accept(new ShipEnlarge())