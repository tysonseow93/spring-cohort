
function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;
    this.dequeue = dequeue;
    this.front = front;
    this.back  = back;
    this.printOut = printOut;
    this.empty = empty;
}

function enqueue(element) {
    this.dataStore.push(element);
}
function dequeue() {
    return this.dataStore.shift();
}
function front() {
    return this.dataStore[0];
}
function back() {
    return this.dataStore[this.dataStore.length -1];
}
function printOut() {
    let retStr = "";
    for (let i = 0; i< this.dataStore.length;i++){
        retStr += this.dataStore[i] +"\n";
    }
    return retStr;
}
function empty() {
    if(this.dataStore.length === 0){
        return true;
    }else{
        return false;
    }
}

let q = new Queue();

function putInQueue() {
    let newQueueValue = $("#queueInput").val();
    q.enqueue(newQueueValue);
    console.log(q.printOut());
    $(".oldestQueue").innerText += q.front();
    $("#queueInput").val("");
}