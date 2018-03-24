class Vehicle {

  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.currentSpeed = 0; 
  }
  
  toString() {
    return this.year + ' ' + this.make + ' ' + this.model;
  }

  setSpeed(speed) {
    this.currentSpeed = speed;
  }
  
  stop() {
    this.currentSpeed = 0;
  }
}

class Stereo {
  constructor() {
    this.type = 'stock';
  }
}

class Car extends Vehicle {
  constructor(make, model, year, hasSpoiler) {
    super(make, model, year);

    this.hasSpoiler = hasSpoiler || false;
    this.trunkStatus = 'closed';
    this.stereo = new Stereo();
  }

  closeTrunk() {
    this.trunkStatus = 'closed';
  }
  
  openTrunk() {
    this.trunkStatus = 'open';
  }
}

class Truck extends Vehicle {

  constructor(make, model, year, bedLength) {
    super(make, model, year);

    this.bedLength = bedLength || 7;
    this.tailGateStatus = 'closed';
    this.stereo = new Stereo();
  }

  lowerTailGate() {
    this.tailGateStatus = 'open';
  }
  
  closeTailGate() {
    this.tailGateStatus = 'closed';
  }
}

class VehicleService {
  constructor() { }

  getCarList() {
    let vehicleList = [];
    vehicleList.push(new Car('Toyota', 'Corolla', 2013, false));
    vehicleList.push(new Car('Nissan', 'Sentra', 2008, false));
    vehicleList.push(new Car('Ford', 'Taurus', 2008));
    vehicleList.push(new Car('Chevy', 'Cobalt', 2007, true));
    vehicleList.push(new Car('Chevy', 'Cavalier', 2005));
    vehicleList.push(new Car('Volkswagon', 'Passat', 2008));
    vehicleList.push(new Car('Chevy', 'Malibu', 2008));
    vehicleList.push(new Car('Ford', 'Focus', 2013));
    vehicleList.push(new Car('Chevy', 'Camaro', 2015, true));

    let carListPromise = new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve(vehicleList);
      }, Math.random() * 2000 + 1000);
    });

    return carListPromise;
  }

  getTruckList() {
    let vehicleList = [];
    vehicleList.push(new Truck('Nissan', 'Titan', 2012));
    vehicleList.push(new Truck('Dodge', 'Ram 2500', 2012));
    vehicleList.push(new Truck('Chevy', 'Silverado', 2000));
    vehicleList.push(new Truck('Chevy', 'Colorado', 2011, 8));
    vehicleList.push(new Truck('Ford', 'F250', 2002));
    vehicleList.push(new Truck('Ford', 'F150', 2017, 9));
    vehicleList.push(new Truck('Ford', 'F350', 2011));
    vehicleList.push(new Truck('Honda', 'Ridgeline', 2009, 6));

    let truckListPromise = new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve(vehicleList);
      }, Math.random() * 2000 + 1000);
    });

    return truckListPromise;
  }
}
