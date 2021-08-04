abstract class Sandwich {
    meat: Array<string> = ["Salami", "Pepperoni", "Ham"];
    cheese: Array<string> = ["Radomer", "Cheder"];
    vegetables: Array<string> = ["Tomato", "Salade", "Onion"];
    public makeSandwich(): void {
        this.cutBread()
        this.putBread();
        if (this.customerWantsMeat()) {
            this.addMeat()
        }
        if (this.customerWantsCheese()) {
            this.addCheese()
        }
        if (this.customerWantsVegetables()) {
            this.addVegetables()
        }
        this.wrapTheSandwich();
    }
    public cutBread(): void {
        console.log("Bread cut");
    }

    public putBread(): void {
        console.log("Bread added")
    };
    public addMeat(): void {
        console.log("Adding meat: ");
        this.meat.forEach(meat => console.log(meat))
    }
    public addCheese(): void {
        console.log("Adding cheese: ");
        this.cheese.forEach(cheese => console.log(cheese))
    }
    public addVegetables(): void {
        console.log("Adding vegetables: ");
        this.vegetables.forEach(vegetable => console.log(vegetable))
    }

    abstract customerWantsMeat(): boolean
    abstract customerWantsCheese(): boolean
    abstract customerWantsVegetables(): boolean
    abstract wrapTheSandwich(): void
}

class ItalianSandwich extends Sandwich {
    customerWantsMeat(): boolean { return true }
    customerWantsCheese(): boolean { return true }
    customerWantsVegetables(): boolean { return true }
    wrapTheSandwich(): void {
        console.log("Italian sandwich is ready!!!");
    }
}

class VegetarianSandwich extends Sandwich {
    customerWantsMeat(): boolean { return false }
    customerWantsCheese(): boolean { return true }
    customerWantsVegetables(): boolean { return true }
    wrapTheSandwich(): void {
        console.log("Vegetarian sandwich is ready!!!");
    }
}

const italianSandwich = new ItalianSandwich()

italianSandwich.makeSandwich()
console.log("======");

const vegetarianSandwich = new VegetarianSandwich()

vegetarianSandwich.makeSandwich()