class Wallet {
    constructor() {
        if (!Wallet.instance) {
            this.balance = 0;
            Wallet.instance = this
        }
        
        return Wallet.instance;
    }

    getInformation () {
        return this.balance;
    }

    addCash(cash) {
        this.balance += cash;
    }

    withdrawalCash(cash) {
        this.balance -= cash;
    }
}

const myWallet = new Wallet();
Object.freeze(myWallet);

const myNewWallet = new Wallet();

console.log(myWallet === myNewWallet);
