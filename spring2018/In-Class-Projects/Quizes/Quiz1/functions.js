function prepend(someString) {
    return ("hello " + someString);
}

function evens(array) {
    let even = [];
    for(let i = 0; i <array.length; i++)
    if(array[i]%2 === 0){
         even.push(array[i]);
    }
    return even;
}

function search(nameList, searchTerm) {
    // i found this on MDN and have no idea what the [[ el ]] part is about but for the most part the other stuff makes sense
    return nameList.filter((el) =>
    el.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1
);
}
function pascal(row, col) {
    //     1        1
    //    1 1       2
    //   1 2 1      3
    //  1 3 3 1     4
    // 1 4 6 4 1    5
    //1 51010 5 1   6
    if (row <= 2 || col === 1 || row === col){
        return 1;
    }
   return pascal(row-1 , col) + pascal(row-1, col-1);

    // for(let row = 1; row > col ; row++){
    //
    //     for(let col = 0; col < row; col++){
    //
    //     }
    // }
}

class Stereo {
    constructor(brand, bluetooth){
        this.brand = brand;
        this.bluetooth = bluetooth;
        this.status = 'off';
    }
    pushPowerButton() {
        if(this.status ==='on'){
            this.status = 'off';
        }
        else{
            this.status = 'on';
        }
    }
}

class Vehicle {
    constructor(make, model, color, stereo){
        this.make = make;
        this.model = model;
        this.color  = color;
        if (stereo){
            this.stereo = stereo;
        }
        else{
            this.stereo  = new Stereo('stock', false);
        }

    }

    setColor(color){
        this.color = color;
    }
    pushStereoPowerButton(){
        this.stereo.pushPowerButton();
    }
}
