/*
    порождающий паттерн который создает интерфейс групирующий другие фабрикиб которые логически связанные друг с другом
*/


function canonProducer (type) {
    return type === "digital" ? digitalCanonCamera : reflexCanonCamera;
};

function digitalCanonCamera() {
    return new EOS();
}

function reflexCanonCamera() {
    return new SLR();
}

class EOS {
    getInfo() {
        return {
            model: "EOS",
            type: "digital",
            pixels: 12,
            canPrint: false
        }
    }
}

class SLR {
    getInfo() {
        return {
            model: "SLR",
            type: "reflex",
            pixels: 10,
            canPrint: false
        }
    }
}

const camera = canonProducer("digital");

const myCamera = new camera();

console.log(myCamera.getInfo());