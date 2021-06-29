/*
    один интерфейс для создания обьектов в суперклассе который предоставляет подклассам изменять тип сщздаваемых обьектов
*/

class Camera {
    constructor(model, price, canPrint) {
        this.model = model;
        this.price = price;
        this.canPrint = canPrint;
    }
}

class CanonFactory {
    create(model) {
        if (model === "EOS") {
            return new Camera(model, 10999, false);
        }
        if (model === "Zoemini") {
            return new Camera(model, 5999, true);
        }
    }
}

const camera = new CanonFactory();

const eos = camera.create("EOS");

const zoemini = camera.create("Zoemini");

console.log(eos);
console.log(zoemini);