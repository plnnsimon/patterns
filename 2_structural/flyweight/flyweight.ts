
class Circle {
  color: string
  private x: number
  private y: number
  private radius: number

  constructor(color: string) {
    this.color = color
    this.x = 0
    this.y = 0
    this.radius = 0
  }

  setX(x: number): void {
    this.x = x
  }

  setY(y: number): void {
    this.y = y
  }

  setRadius(radius: number): void {
    this.radius = radius
  }

  draw(): void {
    console.log( `Draw circle: color: ${this.color}, position(X:${this.x}, Y:${this.y}), radius: ${this.radius}` );
  }
}

class CirclesFactory {
  static circles: Circle[] = []
  
  static getCircle(color: string): Circle {
    let circle = this.circles.filter(el => el.color == color)
    if (circle.length > 0) {
        console.log("FROM CASH")
        return circle[0];
    }
    let newCircle = new Circle(color)
    console.log("New circle created")
    this.circles.push(newCircle)
    return newCircle;
    
  }
}

class FlyweightDemo {
  colors: Array<string> = ['Red', 'Green', "Blue", 'Black']
  
  main(): void {
    
      let circle = CirclesFactory.getCircle(this.getRandomColor())
      circle.setX(this.getRandomX())
      circle.setY(this.getRandomY())
      circle.setRadius(Math.floor(Math.random() * 10))
      circle.draw()
    
  }

  private getRandomColor(): string {
    return this.colors[Math.floor(Math.random() * this.colors.length)]
  }

  private getRandomX(): number {
    return Math.floor(Math.random() * 10)
  }

  private getRandomY(): number {
    return Math.floor(Math.random() * 10)
  }
}

let flyweight = new FlyweightDemo()
for (let i = 0; i < 20; i++) {
    flyweight.main()
}
