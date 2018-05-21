var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fuelType;
(function (fuelType) {
    fuelType["desiel"] = "desiel";
    fuelType["gasoline"] = "gasoline";
    fuelType["electric"] = "electric";
    fuelType["jet"] = "jet";
})(fuelType || (fuelType = {}));
var terrain;
(function (terrain) {
    terrain["land"] = "land";
    terrain["sea"] = "sea";
    terrain["air"] = "air";
    terrain["outerSpace"] = "outerSpace";
})(terrain || (terrain = {}));
var Vehicle = /** @class */ (function () {
    //regular property and constructor:
    // motor: string;
    // terrainType: terrain;
    // fuelType: fuelType;
    // maxSpeed: number;
    // transmission: number;
    // numberPassengers: number;
    // stereo: boolean;
    //
    // protected constructor(motor, terrainType, fuelType, maxSpeed, transmission, numberPassengers, stereo){
    //     this.motor = motor;
    //     this.terrainType = terrainType;
    //     this.fuelType = fuelType;
    //     this.maxSpeed = maxSpeed;
    //     this.transmission = transmission;
    //     this.numberPassengers = numberPassengers;
    //     this.stereo = stereo;
    // }
    //Short hand for creating constructors this is going to be
    //vital for learning angular.
    function Vehicle(motor, terrainType, fuelType, maxSpeed, transmission, numberPassengers, stereo) {
        this.motor = motor;
        this.terrainType = terrainType;
        this.fuelType = fuelType;
        this.maxSpeed = maxSpeed;
        this.transmission = transmission;
        this.numberPassengers = numberPassengers;
        this.stereo = stereo;
    }
    Vehicle.prototype.accelerate = function () {
        console.log("vehicle is speeding up");
    };
    Vehicle.prototype.break = function () {
        console.log("vehicle is slowing down");
    };
    return Vehicle;
}());
var Boat = /** @class */ (function (_super) {
    __extends(Boat, _super);
    function Boat() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Boat;
}(Vehicle));
var Car = /** @class */ (function (_super) {
    __extends(Car, _super);
    function Car() {
        return _super.call(this, 'v6', 'land', 'gasoline', 150, 'automatic', 5, true) || this;
    }
    Car.prototype.driving = function (value) {
        if (value === true) {
            console.log("vehicle is now driving");
        }
        else {
            console.log("vehicle is now stopped");
        }
    };
    return Car;
}(Vehicle));
var Truck = /** @class */ (function (_super) {
    __extends(Truck, _super);
    function Truck(cabSize, bedLength) {
        var _this = _super.call(this, 'v8', 'land', 'diesel', 150, 'manual', 3, true) || this;
        _this.bedLength = bedLength;
        _this.cabSize = cabSize;
        return _this;
    }
    Truck.prototype.driving = function (value) {
        if (value === true) {
            console.log("vehicle is now driving");
        }
        else {
            console.log("vehicle is now stopped");
        }
    };
    return Truck;
}(Vehicle));
var truck = new Truck("crew cab", 6);
truck.driving(false);
truck.break();
var car = new Car();
car.accelerate();
car.driving(true);
