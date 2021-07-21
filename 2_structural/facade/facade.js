class TV {
    turnOn() {
        console.log("TV is turned on");
    }

    turnOff() {
        console.log("TV is turned off");
    }
}

class BlurayPlayer{
    turnOn() {
        console.log('Bluray player turning on');
    }

    turnOff() {
        console.log('Bluray turning off');
    }

    play() {
        console.log('Playing bluray disc');
    }
}

class SoundSystem {
    turnOn () {
        console.log("SoundSystem turned on");
    }

    turnOff () {
        console.log("SoundSystem turned off");
    }

    setSource (source) {
        console.log(`SoundSystem connecting to ${source}`);
    }

    setVolume (number) {
        console.log(`Volume is ${number}`);
    }
    
}

class Light {
    dimLight() {
        console.log("Lights dimming");
    }
}

class HomeTheater {
    constructor(tv, bluray, sound, lights ) {
        this.tv = tv
        this.lights = lights
        this.bluray = bluray
        this.sound = sound
    }

    watchMovie() {
        this.tv.turnOn();

        this.bluray.turnOn();

        this.sound.turnOn();
        this.sound.setSource("bluray");
        this.sound.setVolume(15);

        this.lights.dimLight();

        this.bluray.play();
    }

    endMovie() {
        this.bluray.turnOff();
        this.sound.turnOff();
        this.tv.turnOff();
    }

}

let bluray = new BlurayPlayer()
let sound = new SoundSystem()
let tv = new TV()
let light = new Light()

let homeTheater = new HomeTheater(tv, bluray, sound, light);

homeTheater.watchMovie();
console.log("======");
homeTheater.endMovie();