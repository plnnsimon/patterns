class Phone {
    state: State
    constructor() {
        this.state = new LockedState(this)
    }

    changeState(state: State): void {
        this.state = state
    }

    charge(): void {
        this.state.charge()
    }

    turnOn(): void {
        this.state.turnOn()
    }

    turnOff(): void {
        this.state.turnOff()
    }

    touch(): void {
        this.state.touch()
    }

    swipe(): void {
        this.state.swipe()
    }
}

abstract class State {
    protected phone: Phone
    protected power: boolean
    protected screenOn: boolean
    constructor(phone: Phone) {
        this.phone = phone
        this.power = false
        this.screenOn = false
    }
    abstract charge(): void

    abstract turnOn(): void

    abstract turnOff(): void

    abstract touch(): void

    abstract swipe(): void
}

class LockedState extends State {
    turnOn(): void {
        console.log("Trying to turn on phone...")
        if (this.power) {
            this.phone.changeState(new ChargedState(this.phone))
            this.phone.charge()
            console.log('phone is turned on')
        } else {
            console.log('Try to charge the phone')
        }
    }
    turnOff(): void { }
    touch(): void {
        console.log('Turn on your phone first')
    }
    swipe(): void {
        console.log('Turn on your phone first')
    }
    charge(): void {
        this.power = true
        this.screenOn = true
    }
}

class ChargedState extends State {
    turnOn(): void {
        this.screenOn = true
    }
    turnOff(): void {
        if (this.screenOn && this.turnOn) {
            this.phone.changeState(new LockedState(this.phone))
            this.power = false
            this.screenOn = false
            console.log('phone is turned off...')
        } else {
            console.log('phone is already turned off')
        }
    }
    touch(): void {
        if (!this.power) {
            console.log("Phone is discharged")
        } else {
            console.log("Touch")
            setTimeout(() => {
                this.power = false
                console.log("power off, charge the phone")
            }, 5000)
            setTimeout(() => {
                this.touch()
            }, 6000)
        }

    }
    swipe(): void {
        if (!this.power || !this.screenOn) {
            console.log("Oops... Something went wrong")
        } else {
            console.log("Swipe")
            setTimeout(() => {
                this.power = false
                console.log("power off, charge the phone")
            }, 5000)
            setTimeout(() => {
                this.swipe()
            }, 6000)
        }

    }
    charge(): void {
        this.power = true
        this.screenOn = true
    }
}

const iPhone = new Phone()

iPhone.swipe()

iPhone.turnOn();

iPhone.charge();
iPhone.turnOn();

iPhone.swipe()

iPhone.turnOff()

iPhone.swipe()
