class UserOrder {
    constructor() {
        this.orders = []
    }

    add(order) {
        this.orders.push(order)
    }
}

class ProductOrder extends UserOrder {
    
}