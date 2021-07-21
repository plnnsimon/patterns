class Phone {
    constructor() {
        this.powerOn = false;
        this.screenOn = false;
    }

    charge() {
        this.powerOn = true
    }

    turnOn() {
        this.screenOn = true
    }

    turnOff() {
        this.screenOn = false
    }

    touch() {
        if (!this.powerOn) {
            return "Phone is discharged"
        }
        if (!this.screenOn) {
            this.screenOn = true;
        }

        return "Touch"
    }

    swipe() {
        if (!this.powerOn || !this.screenOn) {
            return "Oops... Try to turn on your device or charge it"
        }
        return "Swipe"
    }
}

const iphone = new Phone()

console.log(iphone.swipe())

iphone.turnOn()

console.log(iphone.swipe())

iphone.charge();

console.log(iphone.swipe())
console.log(iphone.touch())

iphone.turnOff()

console.log(iphone.swipe())
