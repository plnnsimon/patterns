var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Phone = /** @class */ (function () {
    function Phone() {
        this.state = new LockedState(this);
    }
    Phone.prototype.changeState = function (state) {
        this.state = state;
    };
    Phone.prototype.charge = function () {
        this.state.charge();
    };
    Phone.prototype.turnOn = function () {
        this.state.turnOn();
    };
    Phone.prototype.turnOff = function () {
        this.state.turnOff();
    };
    Phone.prototype.touch = function () {
        this.state.touch();
    };
    Phone.prototype.swipe = function () {
        this.state.swipe();
    };
    return Phone;
}());
var State = /** @class */ (function () {
    function State(phone) {
        this.phone = phone;
        this.power = false;
        this.screenOn = false;
    }
    return State;
}());
var LockedState = /** @class */ (function (_super) {
    __extends(LockedState, _super);
    function LockedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LockedState.prototype.turnOn = function () {
        console.log("Trying to turn on phone...");
        if (this.power) {
            this.phone.changeState(new ChargedState(this.phone));
            this.phone.charge();
            console.log('phone is turned on');
        }
        else {
            console.log('Try to charge the phone');
        }
    };
    LockedState.prototype.turnOff = function () { };
    LockedState.prototype.touch = function () {
        console.log('Turn on your phone first');
    };
    LockedState.prototype.swipe = function () {
        console.log('Turn on your phone first');
    };
    LockedState.prototype.charge = function () {
        this.power = true;
        this.screenOn = true;
    };
    return LockedState;
}(State));
var ChargedState = /** @class */ (function (_super) {
    __extends(ChargedState, _super);
    function ChargedState() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ChargedState.prototype.turnOn = function () {
        this.screenOn = true;
    };
    ChargedState.prototype.turnOff = function () {
        if (this.screenOn && this.turnOn) {
            this.phone.changeState(new LockedState(this.phone));
            this.power = false;
            this.screenOn = false;
            console.log('phone is turned off...');
        }
        else {
            console.log('phone is already turned off');
        }
    };
    ChargedState.prototype.touch = function () {
        var _this = this;
        if (!this.power) {
            console.log("Phone is discharged");
        }
        else {
            console.log("Touch");
            setTimeout(function () {
                _this.power = false;
                console.log("power off, charge the phone");
            }, 5000);
            setTimeout(function () {
                _this.touch();
            }, 6000);
        }
    };
    ChargedState.prototype.swipe = function () {
        var _this = this;
        if (!this.power || !this.screenOn) {
            console.log("Oops... Something went wrong");
        }
        else {
            console.log("Swipe");
            setTimeout(function () {
                _this.power = false;
                console.log("power off, charge the phone");
            }, 5000);
            setTimeout(function () {
                _this.swipe();
            }, 6000);
        }
    };
    ChargedState.prototype.charge = function () {
        this.power = true;
        this.screenOn = true;
    };
    return ChargedState;
}(State));
var iPhone = new Phone();
iPhone.swipe();
iPhone.turnOn();
iPhone.charge();
iPhone.turnOn();
iPhone.swipe();
iPhone.turnOff();
iPhone.swipe();
//# sourceMappingURL=state.js.map