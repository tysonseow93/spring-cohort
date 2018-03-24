// The concept of not adding methods to classes and objects that should not
//have them for example the fly() functions should NEVER be applied to the penguin class.

class Sparrow {
    constructor(name){
        this.name = name;
    }

    fly(){
        console.log(this.name + "is flying");
    }
}
class Duck {
    constructor(name){
        this.name = name;
    }

    fly(){
        console.log(this.name + "is flying");
    }
}
class Penguin {
    constructor(name){
        this.name = name;
    }

    swim(){
        console.log(this.name + "is swimming");
    }
}

let charlie = new Sparrow("Charlie");
let daffy = new Duck("Daffy");
let billy = new Penguin("Billy");


liftoff(charlie);
liftoff(daffy);
liftoff(billy);

function liftoff(animal) {
    animal.fly();
}