/*
    порождающий паттерн позаоляющий копировать обьекты не вдаваясь в подробности их реализации
*/


class AcerComputer {

    constructor(cpu, gpu, ram, discSystem) {
        this.cpu = cpu;
        this.gpu = gpu;
        this.ram = ram;
        this.discSystem = discSystem;
    }

    produce() {
        return new AcerComputer(this.cpu, this.gpu, this.ram, this.discSystem);
    }

}

const prototypeComputer = new AcerComputer("Intel", "NVIDIA", 8, "HDD");

const computer1 = prototypeComputer.produce();
const computer2 = prototypeComputer.produce();
const computer3 = prototypeComputer.produce();

computer1.ram = 16;
computer1.discSystem = "SSD";


console.log(computer1);
console.log(computer2);
console.log(computer3);