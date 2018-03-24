class Person {
  constructor(name, email, wantsVehicle, wantsMake, wantsModel) {
    this.name = name;
    this.email = email;
    this.wantsMake = wantsMake;
    this.wantsModel = wantsModel;
    this.wantsVehicle = wantsVehicle;
  }
}

class PeopleService {
  constructor() { }

  getPeopleList() {
    let peopleArray = [];
    peopleArray.push(new Person('Stacy', 'stacy@email.com', 'Truck', 'Nissan', 'Titan'));
    peopleArray.push(new Person('Brad', 'brad@email.com', 'Car', 'Chevy', 'Cobalt'));
    peopleArray.push(new Person('Terry', 'terry@email.com', 'Car', 'Ford', 'Focus'));
    peopleArray.push(new Person('Lucy', 'lucy@email.com', 'Truck', 'Ford', 'F250'));
    peopleArray.push(new Person('Bryson', 'bryson@email.com', 'Truck', 'Honda', 'Ridgeline'));
    peopleArray.push(new Person('Ned', 'ned@email.com', 'Truck', 'Dodge', 'Dakota'));
    
    let peoplePromise = new Promise(function(resolve, reject) {
      window.setTimeout(function() {
        resolve(peopleArray);
      }, Math.random() * 2000 + 1000);
    });

    return peoplePromise;
  }

}
