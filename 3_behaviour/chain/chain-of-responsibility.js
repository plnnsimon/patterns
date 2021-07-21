class Money {
    constructor(billSize) {
        this.billSize = billSize;
        this.next = null
    }

    withdraw(amount) {
        let numOfBills = Math.floor(amount / this.billSize)

        if (numOfBills > 0) {
            this._ejectMoney(numOfBills);

            amount = amount - (this.billSize * numOfBills)
        }

        amount > 0 && this.next && this.next.withdraw(amount)
    }

    setNextStack(stack) {
        this.next = stack;
    }

    _ejectMoney(numOfBills) {
        console.log(numOfBills + " $" + this.billSize + " bill(s) has/have been split out");
    }
}

class ATM extends Money {
    constructor(stack) {
        super();
        this.moneyStack = stack
    }

    withdraw(amount) {
        this.moneyStack.withdraw(amount)
    }
}
let stack100 = new Money(100)
let stack50 = new Money(50)
let stack25 = new Money(25)
let stack10 = new Money(10)
let stack5 = new Money(5)

stack100.setNextStack(stack50)
stack50.setNextStack(stack25)
stack25.setNextStack(stack10)
stack10.setNextStack(stack5)

const atm = new ATM(stack100) 

atm.withdraw(90)