class ATM {
    constructor(public amount: number) {
        this.amount = amount
    }

    withdraw(billDenomination: number): ATM {
        const numOfBills = Math.floor(this.amount / billDenomination)
        this.amount -= numOfBills * billDenomination

        console.log(`Withdrawing ${numOfBills} $${billDenomination} bills. Amount Left: $${this.amount}`);
        return this
    }
}

let atm = new ATM(368)

atm.withdraw(100).withdraw(50).withdraw(25).withdraw(5)
