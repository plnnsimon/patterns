class Product {
    constructor(product) {
        this.product = product
    }
}


class Check {
    constructor() {
        this.list = []
    }

    addProduct(product) {
        let productInList = this.list.find(el => el === product)
        if (productInList) {
            console.log(`"This product (${product}) already added"`);
            return productInList
        }
        console.log(`Product ${product} added`);
        this.list.push(product)
        return this.list
    }

    getCheckInfo() {
        return console.table(this.list);
    }
}

const myProductCheck = new Check()

myProductCheck.addProduct("apples")
myProductCheck.addProduct("fish")
myProductCheck.addProduct("apples")

myProductCheck.getCheckInfo()