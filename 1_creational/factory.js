function ChineseFood (meal) {
    this.meal = meal
    this.cost = 50
}

function ItalianFood (meal) {
    this.meal = meal
    this.cost = 70
}

function Restaurant () {
    this.create = (type, meal) => {
        switch(type) {
            case "sushi": 
                return new ChineseFood(meal);
            case "pizza":
                return new ItalianFood(meal);
        }
    }
}

const restaurant = new Restaurant();

const order = [];

order.push(restaurant.create("sushi", "philadelphia set"));

console.log(order);