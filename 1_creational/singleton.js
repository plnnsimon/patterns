class Wallet {
    constructor() {
        if (Wallet.instance == null) {
            Wallet.balance = 0;
            Wallet.instance = this
        }
        
        return Wallet.instance;
    }

    getInformation () {
        return console.log(Wallet.balance);
    }

    addCash(cash) {
        return Wallet.balance += cash;
    }

    withdrawalCash(cash) {
        return Wallet.balance -= cash;
    }
}

const myWallet = new Wallet();

myWallet.getInformation();

myWallet.addCash(300);

myWallet.getInformation();

const myNewWallet = new Wallet();

myNewWallet.getInformation();
console.log("===========");
myNewWallet.withdrawalCash(200);

myNewWallet.getInformation();
myWallet.getInformation()

console.log(myWallet === myNewWallet);