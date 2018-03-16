

class Person {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class ThingService {
    constructor() { }

    getPeopleList() {
        let person1 = new Person('Stacy', 'stacy@email.com');
        let person2 = new Person('Brad', 'brac@email.com');
        let person3 = new Person('Terry', 'terry@email.com');

        let peopleArray = [person1, person2, person3];
        let peoplePromise = new Promise(function(resolve, reject) {
            window.setTimeout(function() {
                resolve(peopleArray);
            }, 4000);
        });

        return peoplePromise;

    }

    sometimesFail() {
        let person1 = new Person('Stacy', 'stacy@email.com');
        let person2 = new Person('Brad', 'brac@email.com');
        let person3 = new Person('Terry', 'terry@email.com');

        let returnSuccessfully = Math.floor(Math.random() * Math.floor(2)); // 0 or 1

        let peopleArray = [person1, person2, person3];

        let peoplePromise = new Promise(function(resolve, reject) {
            window.setTimeout(function() {
                if (returnSuccessfully) {
                    resolve(peopleArray);
                } else {
                    reject({response: 'no data for you!'});
                }
            }, 4000);
        });

        return peoplePromise;


    }



}
