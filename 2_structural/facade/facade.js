var TV = /** @class */ (function () {
    function TV() {
    }
    TV.prototype.turnOn = function () {
        console.log("TV is turned on");
    };
    TV.prototype.turnOff = function () {
        console.log("TV is turned off");
    };
    return TV;
}());
var BlurayPlayer = /** @class */ (function () {
    function BlurayPlayer() {
        this.name = "Bluray";
    }
    BlurayPlayer.prototype.turnOn = function () {
        console.log('Bluray player turning on');
    };
    BlurayPlayer.prototype.turnOff = function () {
        console.log('Bluray turning off');
    };
    BlurayPlayer.prototype.play = function () {
        console.log('Playing bluray disc');
    };
    return BlurayPlayer;
}());
var SoundSystem = /** @class */ (function () {
    function SoundSystem() {
    }
    SoundSystem.prototype.turnOn = function () {
        console.log("SoundSystem turned on");
    };
    SoundSystem.prototype.turnOff = function () {
        console.log("SoundSystem turned off");
    };
    SoundSystem.prototype.setSource = function (source) {
        console.log("SoundSystem connecting to " + source);
    };
    SoundSystem.prototype.setVolume = function (number) {
        console.log("Volume is " + number);
    };
    return SoundSystem;
}());
var Light = /** @class */ (function () {
    function Light() {
    }
    Light.prototype.dimLight = function () {
        console.log("Lights dimming");
    };
    return Light;
}());
var HomeTheater = /** @class */ (function () {
    function HomeTheater(tv, bluray, sound, lights) {
        this.tv = tv;
        this.bluray = bluray;
        this.sound = sound;
        this.lights = lights;
        this.tv = tv;
        this.lights = lights;
        this.bluray = bluray;
        this.sound = sound;
    }
    HomeTheater.prototype.watchMovie = function () {
        this.tv.turnOn();
        this.bluray.turnOn();
        this.sound.turnOn();
        this.sound.setSource(this.bluray.name);
        this.sound.setVolume(15);
        this.lights.dimLight();
        this.bluray.play();
    };
    HomeTheater.prototype.endMovie = function () {
        this.bluray.turnOff();
        this.sound.turnOff();
        this.tv.turnOff();
    };
    return HomeTheater;
}());
var bluray = new BlurayPlayer();
var sound = new SoundSystem();
var tv = new TV();
var light = new Light();
var homeTheater = new HomeTheater(tv, bluray, sound, light);
homeTheater.watchMovie();
console.log("======");
homeTheater.endMovie();
//# sourceMappingURL=facade.js.map