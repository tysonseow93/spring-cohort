function firstDuplicate(array) {

    let result = -1;
    let seenNumbers = [];
    let len = array.length;
    let duplicateFound = false;


    if(duplicateFound !== true) {

        for(let i = 0; i < len; i++){
            seenNumbers.push(array.shift());
            for (let j = 0; j < len; j++) {
                if (seenNumbers[i] === array[j]) {
                    duplicateFound = true;
                    result = array[j];

                }
            }

        }
        return result;
    }


}
