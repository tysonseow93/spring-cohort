

console.log('hello, world');

let thingService = new ThingService();
let peoplePromise = thingService.getPeopleList();

peoplePromise.then(function (peopleList) {
    console.log(peopleList);
});

// sometimes fails

let thingServiceTwo = new ThingService();
let peoplePromiseTwo = thingService.sometimesFail();

peoplePromiseTwo.then(function (peopleList) {
    console.log(peopleList);
});
