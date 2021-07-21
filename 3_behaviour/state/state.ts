class Phone {
    private powerOn: boolean
    private screenOn: boolean
    constructor() {
        this.powerOn = false;
        this.screenOn = false;
    }

    charge(): void {
        console.log("Full charge");
        this.powerOn = true
    }

    turnOn(): void {
        if (!this.powerOn) {
            this.screenOn = false
            console.log("Try to charge your pone")
        }
        this.screenOn = true
    }

    turnOff(): void {
        this.screenOn = false
    }

    touch(): string  {
        if (!this.powerOn) {
            return "Phone is discharged"
        }
        if (!this.screenOn) {
            this.screenOn = true;
        }

        return "Touch"
    }

    swipe(): string {
        if (!this.powerOn || !this.screenOn) {
            return "Oops... Something went wrong"
        }
        return "Swipe"
    }
}

const iphone = new Phone()

console.log(iphone.swipe())

iphone.turnOn();

iphone.charge();

console.log(iphone.swipe())
console.log(iphone.touch())

iphone.turnOff()

console.log(iphone.swipe())
