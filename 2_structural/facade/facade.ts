class TV {
    turnOn(): void {
        console.log("TV is turned on");
    }

    turnOff(): void {
        console.log("TV is turned off");
    }
}

class BlurayPlayer {
  name: string
  constructor() {
    this.name = "Bluray"
  }
    turnOn(): void {
        console.log('Bluray player turning on');
    }

    turnOff(): void {
        console.log('Bluray turning off');
    }

    play(): void {
        console.log('Playing bluray disc');
    }
}

class SoundSystem {
    turnOn(): void {
        console.log("SoundSystem turned on");
    }

    turnOff(): void {
        console.log("SoundSystem turned off");
    }

    setSource(source: string): void {
        console.log(`SoundSystem connecting to ${source}`);
    }

    setVolume (number: number): void {
        console.log(`Volume is ${number}`);
    }
    
}

class Light {
    dimLight(): void {
        console.log("Lights dimming");
    }
}

class HomeTheater {
    constructor(
        private tv: TV, 
        private bluray: BlurayPlayer, 
        private sound: SoundSystem, 
        private lights: Light
    ) {
        this.tv = tv
        this.lights = lights
        this.bluray = bluray
        this.sound = sound
    }

    watchMovie(): void {
        this.tv.turnOn();

        this.bluray.turnOn();

        this.sound.turnOn();
        this.sound.setSource(this.bluray.name);
        this.sound.setVolume(15);

        this.lights.dimLight();

        this.bluray.play();
    }

    endMovie(): void {
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