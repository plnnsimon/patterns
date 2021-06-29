class Wallet {
    constructor() {
        if (Wallet.instance == null) {
            Wallet.balance = 0;
            Wallet.instance = this
        }
        
        return Wallet.instance;
    }

    getInstance () {
        return Wallet.balance;
    }

    addCash(cash) {
        return this.balance += cash;
    }

    withdrawalCash(cash) {
        return this.balance -= cash;
    }
}

const myWallet = Wallet.getInstance();

console.log(myWallet);