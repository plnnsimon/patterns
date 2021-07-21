class Product {
    product: string
    constructor(product: string) {
        this.product = product
    }

    setAmount(amount: number): void {
        console.log(`${amount} products added`);
        
    }
}


class FoodCheck {
    list: Array<Product>
    constructor() {
        this.list = []
    }

    getProduct(product: string): Product {
        let productInList = this.list.find((el): boolean => el.product === product)
        if (productInList) {
            console.log(`Product "${product}" already added`);
            return productInList
        }
        const newProduct = new Product(product)
        console.log(`Product ${product} added`);
        this.list.push(newProduct)
        return newProduct
    }

    getCheckInfo(): void {
        return console.table(this.list);
    }
}

const myCheck = new FoodCheck()

myCheck.getProduct("apples")
myCheck.getProduct("fish")
myCheck.getProduct("apples")

myCheck.getCheckInfo()
