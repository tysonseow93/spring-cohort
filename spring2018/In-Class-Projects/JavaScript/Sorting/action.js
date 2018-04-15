let array1 = [4,5,7,2,1,3,8];
let array2 = [9,5,6,2,1,3,4,7];
let array3 = [0,9,8,7,6,5,4,3,2,1];


function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

function selectionSort(array) {
    for(let i = 0; i < array.length; i++) {
        let min = i;
        for(let j = i + 1; j < array.length; j++) {
            if(array[j] < array[min]) {
                min = j;
            }
        }
        if(i !== min) {
            swap(array, i, min);
        }
    }
    return array;
}



function selectSort2(list) {
    let min = list[0];
    let minIndex;
    for(let i = 0; i < list.length; i++){
        if(list[i < min]){
            min = list[i];
            minIndex = i ;
        }
    }
}

