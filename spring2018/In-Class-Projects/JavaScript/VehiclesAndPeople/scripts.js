console.log('hello');

function haveVehicle() {
    
}

function writeTheSolution() {
    
}


let vehicleService = new VehicleService();
let peopleService = new PeopleService();

let promise1 = peopleService.getPeopleList();
let promise2 = vehicleService.getCarList();
let promise3 = vehicleService.getTruckList();

Promise.all( [promise1, promise2, promise3] ).then(function(values) {
    let peopleList = values[0];
    let carList = values[1];
    let truckList = values[2];
    let vehicleList = carList.concat(truckList);



    for(let i = 0; i < peopleList.length; i++){
        console.log(peopleList[i]);
    }
    
    for(let i = 0; i < vehicleList.length; i++){
        console.log(vehicleList[i]);
    }



    console.log( values );


});

