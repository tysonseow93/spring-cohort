// ICA-1
//
//
// let myfunction = function(function(a){
//     return a + a;
// }
//  function funtionOne(fn, a) {
//     return fn(a);
//  }
//
//  let result = funtionOne(myfunction, 'hi');
// console.log(result);


// ICA -2

function factorial(n) {
    if (n === 0){
        return 1
    }
    else{
        return n * factorial(n -1);
    }
}

let n = document.getElementById();
let factorialAnswer = factorial(7);
console.log(factorialAnswer);