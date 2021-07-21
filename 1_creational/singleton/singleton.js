class Budget {
    constructor() {
        if (Budget.exists) {
            return Budget.instance;
        }
        Budget.instance = this;
        Budget.exists = true;
        this.balance = 0;
    }

    getBalance () {
        return this.balance;
    }

    addCash(cash) {
        this.balance += cash;
    }

    takeCash(cash) {
        this.balance -= cash;
    }
}

const myBudget = new Budget();

const myBudget2 = new Budget();

console.log(myBudget === myBudget2);