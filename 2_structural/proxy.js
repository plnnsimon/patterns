class Bank {
    constructor() {
      this.cash = 0;
    }
  
    deposit(amount) {
      this.cash += amount;
      return this.cash;
    }
  
    withdraw(amount) {
      if (amount <= this.cash) {
        this.cash -= amount;
        return true;
      } else {
        return false;
      }
    }
  
    total() {
      return this.cash;
    }

}

class BankProxy {
    constructor() {
      this.bank = new Bank();
    }
  
    deposit(amount) {
      this.bank.deposit(amount);
      console.log(`Deposit - ${amount}. Your total cash: ${this.bank.total()}`);
    }
  
    withdraw(amount) {
      if (this.bank.withdraw(amount)) {
        console.log(`Withdraw  - ${amount}. Your total cash: ${this.bank.total()}`);
      } else {
        console.error(`Not enough cash! Your total cash: ${this.bank.total()}`);
      }
    }
  
    total() {
      return console.log(`Total cash: ${this.bank.total()}`);
    }

}

const bank = new BankProxy()

bank.deposit(3500)
bank.withdraw(500)
bank.withdraw(3550)

bank.total()