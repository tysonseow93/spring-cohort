function appendWorld(value) {
    return value + " world";
}

function evens(numberList) {
    let evenNumbers = [];
    for(let i = 0; i < numberList.length; i++){
        let currNumber = numberList[i];

        if(currNumber % 2 === 0){
            evenNumbers.push(currNumber);
        }
    }

    return evenNumbers;

}