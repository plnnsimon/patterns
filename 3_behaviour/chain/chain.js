// кумулятивный
var ATM = /** @class */ (function () {
    function ATM(amount) {
        this.amount = amount;
        this.amount = amount;
    }
    ATM.prototype.withdraw = function (billDenomination) {
        var numOfBills = Math.floor(this.amount / billDenomination);
        this.amount -= numOfBills * billDenomination;
        console.log("Withdrawing " + numOfBills + " $" + billDenomination + " bills. Amount Left: $" + this.amount);
        return this;
    };
    return ATM;
}());
var atm = new ATM(368);
atm.withdraw(100).withdraw(50).withdraw(25).withdraw(5);
//# sourceMappingURL=chain.js.map