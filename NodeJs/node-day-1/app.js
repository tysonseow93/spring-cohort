#!/usr/local/bin/node

console.log('hello');

console.log(__dirname);
console.log(__filename);


let arr = process.argv;
let argArray = process.argv.splice(2);
// console.log(arr);
console.log(argArray);



if(argArray[0] === 'average'){
    let odds = 0;
    let oddCounter = 0;
    let evens = 0;
    let numbers = argArray.splice(1);
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0) {
            evens += Number(numbers[i]);
        } else if (numbers[i] % 2 !== 0){
            ++oddCounter;
            odds += Number(numbers[i]);
        }
    }
    console.log('odd counter '+ oddCounter);
    console.log('evens added ' + evens);
    console.log('odds average ' + (odds/oddCounter));
}

for(let i = 0; i < 20; i++ ){
    if(i % 2 === 0 && argArray[0] === 'even'){
        console.log('even number ' + i);
    }else if (i % 2 !== 0 && argArray[0] === 'odd'){
        console.log('odd number ' + i);
    }
}



if(argArray[0] === 'add'){
    let sum = 0;
    let numbers = argArray.splice(1);
    console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        sum += Number(numbers[i])
    }
    console.log(sum)
}else if (argArray[0] === 'multiply'){
    let result = 1;
    let numbers = argArray.splice(1);
    console.log(numbers);
    for(let i = 0; i < numbers.length; i++){
        result *= Number(numbers[i])
    }
    console.log(result)
}

