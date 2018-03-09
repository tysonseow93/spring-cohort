let monster = function() {
    this.name = "Frank";
    this.health = 75;

    this.jump = function() {
        console.log("monster jumped");
    }

    this.crouch = function() {
        console.log("monster crouched");
    }

    this.punched = function() {
        console.log("monster punched");
    }
};

let frank = new monster("Frank");
let drStein = new monster("DR. Stein");
let msFrank = new monster("Ms. Frank");
console.log(frank.name);
console.log(drStein.name);
console.log(msFrank.name);


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


let mirror = new Reflect(frank);
let marray = mirror.getAllMethods();
console.log(marray);

for(var i = 0; i < marray.length; i++){
    $(".buttonbox").append("<a href='javascript: frank." + marray[i] +"()' class='mybtn'>"+ marray[i] +"</a>");
}