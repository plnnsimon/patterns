abstract class Sandwich {
    makeSandwich(): void {
        this.cutBread()
        this.putBread();
        if(this.customerWantsMeat()){
            this.addMeat()
        }
        if(this.customerWantsCheese()) {
            this.addCheese()
        }
        if(this.customerWantsVegetables()) {
            this.addVegetables()
        }
        this.wrapTheSandwich();
    }
    public cutBread(): void {
        console.log("Bread is cut");        
    }

    abstract putBread(): void;
    abstract addMeat(): void;
    abstract addCheese(): void;
    abstract addVegetables(): void;

    customerWantsMeat(): boolean {
        return true
    }
    customerWantsCheese(): boolean {
        return true
    }
    customerWantsVegetables(): boolean {
        return true
    }
    public wrapTheSandwich(): void {
        console.log("Sandwich is ready!!!");
    }
}

class ItalianSandwich extends Sandwich {
    meat: Array<string> = ["Salami", "Pepperoni", "Ham"];
    cheese: Array<string> = ["Radomer", "Cheder"];
    vegetables: Array<string> = ["Tomato", "Salade", "Onion"];

    putBread(): void {
        console.log("Bread added");
    }
    addMeat(): void {
        console.log("Adding meat: ");
        this.meat.forEach(meat => console.log(meat))
    }
    addCheese(): void {
        console.log("Adding cheese: ");
        this.cheese.forEach(cheese => console.log(cheese))
    }
    addVegetables(): void {
        console.log("Adding vegetables: ");
        this.vegetables.forEach(vegetable => console.log(vegetable))
    }
    
}

class VegetarianSandwich extends Sandwich {
    vegetables: Array<string> = ["Tomato", "Salade", "Onion"];
    customerWantsMeat(): boolean { return false }
    customerWantsCheese(): boolean { return true }
    putBread(): void {
        console.log("Bread added");
    }
    addMeat(): void {}
    addCheese(): void {}
    addVegetables(): void {
        console.log("Vegetables meat: ");
        this.vegetables.forEach(vegetable => console.log(vegetable))
    }
    
}

const italianSandwich = new ItalianSandwich()

italianSandwich.makeSandwich()
console.log("======");

const vegetarianSandwich = new VegetarianSandwich()

italianSandwich.makeSandwich()