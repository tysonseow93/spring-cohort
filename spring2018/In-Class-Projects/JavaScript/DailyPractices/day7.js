// in class assignment create an object with 6 properties
let car =  {
    make: "Toyota",
    model: "Prius",
    year: 2007,
    vin: "JPN19284933",
    color: "blue",
    condition: "poor",
};
let gameItemHealth = {
    playerHealth: 100,
    ironSword: 15,
    steelSword: 20,
    shieldLight: 50,
    shieldHeavy: 150,
    woodBow: 5,
    steelBow: 10,
    padArmor: 5,
    leatherArmor: 15,
    studdedLeather: 30,
    chainShirt: 100,
    scalemail: 150,
    candle: 1,
    cup: 1,
    chainmail: 200,
    breastplate: 250,
    bandedArmor: 300,
    halfPlate: 400,
    fullPlate: 500,
    lance: 30,
    dagger: 5,
    greatSword: 30,
    crossbowLight: 15,
    crossbowHeavy: 25,
    boots: 5,
    backpack: 3,
    bedRoll: 2,
};
let starWarsCharacters = {

};
let Chewie = {
    job: "Smugglers Assistant",
    hobby: "Space Chess",
    species: "Wookie",
    language: "Rawr",
    skill: ["mechanic", "marksman", "pilot", "smuggler"],
    ACT: 23
};

document.getElementById("namebox").innerHTML = Chewie.job;

let monster = function(mname) {
    this.name = mname;
    this.health = 80;

    this.jump = function() {
        console.log("monster jumped");
    }
};

let fred = new monster("fred");
let bob = new monster("bob");
console.log(fred.name);
console.log(bob.name);


// Example of a reflector //


// let reflector = function(obj) {
//     this.getProperties = function() {
//         var properties = [];
//         for (var prop in obj){
//             if(typeof obj[prop] != 'function'){
//                 properties.push(prop);
//             }
//         }
//         return properties;
//     }
// }

let Reflect = function(obj) {

    this.getProperty = function() {
        let properties = [];
        for (let prop in obj){
            if(typeof obj[prop] != 'function'){
                properties.push(prop);
            }
        }
    return properties;
    };

    this.getAllMethods = function() {
        let methods = [];
        for(let meth in obj){
            if(typeof obj[meth] === 'function'){
                methods.push(meth);
            }
        }
     return methods;
    };
};


let mirror = new Reflect(fred);
console.log(mirror.getProperty());
console.log(mirror.getAllMethods());
