enum fuelType {desiel = 'desiel',  gasoline = "gasoline", electric = 'electric', jet = 'jet'}
enum terrain {land = 'land', sea = 'sea', air = 'air', outerSpace = 'outerSpace'}

abstract class Vehicle{
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

    protected constructor(
        public motor: string,
        public terrainType: terrain,
        public fuelType: fuelType,
        public maxSpeed: number,
        public transmission: string,
        public numberPassengers: number,
        public stereo: boolean
        ){}


    accelerate(){
        console.log("vehicle is speeding up");
    }

    break(){
        console.log("vehicle is slowing down");
    }



}


class Boat extends Vehicle{
    sunk: boolean;


}

class Car extends Vehicle{
    driving(value:boolean){
        if(value === true) {
            console.log("vehicle is now driving");
        }else{
            console.log("vehicle is now stopped");
        }
    }
    constructor() {
        super('v6', <terrain>'land', <fuelType>'gasoline', 150, 'automatic', 5, true);

    }

}

class Truck extends Vehicle{
    driving(value:boolean){
        if(value === true) {
            console.log("vehicle is now driving");
        }else{
            console.log("vehicle is now stopped");
        }
    }
    bedLength: number;
    cabSize: string;
    constructor(cabSize, bedLength){
        super('v8', <terrain>'land', <fuelType>'diesel', 150, 'manual', 3, true);
        this.bedLength = bedLength;
        this.cabSize = cabSize;

    }
}

let truck = new Truck("crew cab",6);
truck.driving(false);
truck.break();
let car = new Car();
car.accelerate();
car.driving(true);

