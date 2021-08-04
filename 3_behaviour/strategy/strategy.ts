interface Discount {
    getDiscount(amount: number): number
}

class BaseDiscount implements Discount {
    getDiscount(amount: number): number {
        return amount;
    }
}

class PremiumDiscount implements Discount {
    getDiscount(amount: number): number {
        return amount * 0.70;
    }
}

class PlatinumDiscount implements Discount {
    getDiscount(amount: number): number {
        return amount * 0.50;
    }
}

class Product {
    public amount: number
    private discount: Discount
    constructor(discount: Discount) {
        this.discount = discount
        this.amount = 0
    }

    check(): string {
        return `With discount - ${this.discount.getDiscount(this.amount)}`
    }

    setAmount(amount: number): void {
        this.amount = amount
    }
}

const baseDiscount = new Product(new BaseDiscount())
const premiumDiscount = new Product(new PremiumDiscount())
const platinumDiscount = new Product(new PlatinumDiscount())

baseDiscount.setAmount(1000)
console.log(baseDiscount.check())

premiumDiscount.setAmount(1000)
console.log(premiumDiscount.check())

platinumDiscount.setAmount(1000)
console.log(platinumDiscount.check())