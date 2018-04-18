function sort(list) {
    let len = list.length;
    for(let i = 0; i < len; i++) {
        let min = i;
        for(let j = i + 1; j < len; j++) {
            if(list[j] < list[min]) {
                min = j;
            }
        }
        if(i !== min) {
            swap(list, i, min);
        }
    }
    return list;
}
function swap(list, i, j) {
    let temp = list[i];
    list[i] = list[j];
    list[j] = temp;
}
