// function car(make, model, year, spoiler, stereo) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.spoiler = spoiler;
//     this.stereo = stereo;
//
//     }
//
// function truck(make, model, year, bedLength, stereo) {
//     this.make = make;
//     this.model = model;
//     this.year = year;
//     this.bedLength = bedLength;
//     this.stereo = stereo;
// }
//
// let car1 = new car("toyota", "prius", 2007, false, "stock");
// let truck1 = new truck("Ford", "F-150", 2015, 8, "stock");

class vehicle(make, model, year){
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentSpeed = 0;
    this.stereo = true;
   
}