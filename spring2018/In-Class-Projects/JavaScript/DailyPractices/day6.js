// var value = myResults(3);
//
// tysonSeow('a Gentleman', 'a Scholar');
// //
// var boxOne = document.getElementById("box1").value;
// var boxtwo = document.getElementById("box2").value;


//
// function myResults(theNumber) {
//     var myCalc = theNumber + 10;
//     return myCalc;
// }
//
//
// function tysonSeow(featureOne, featureTwo){
//     console.log("Hello Tyson, you are " + featureOne + ' and ' + featureTwo + '.');
// }

function theCalc() {
    let boxOne = document.getElementById("box1").value;
    let boxTwo = document.getElementById("box2").value;
    var finalAnswer = runThis(boxOne, boxTwo);
    document.getElementById("addition").innerHTML = finalAnswer;
    return finalAnswer;
}
function runThis(valueone, valuetwo) {
    return Number(valueone) + Number(valuetwo);
}

function factorialCalc() {
    let boxThree = document.getElementById("box3").value;
    let factorialAnswer = factorial(boxThree);
    document.getElementById("factAnswer").innerHTML = factorialAnswer;
    return factorialAnswer;
}


function factorial(n) {

    if (n === 0){
        return 1
    }
    else{
        return Number(n * factorial(n -1));
    }
}


