class Stack {

    constructor() {
        this.array = [];
        this.index = 0;
    }

    push(val) {
        this.array[this.index++] = val;
    }

    pop() {
        if (this.index === 0) {
            return null;
        }

        let poppedValue = this.array[--this.index]
        this.array.length = this.array.length-1;

        return poppedValue;
    }

    peek() {
        if (this.index === 0) {
            return null;
        }

        return this.array[this.index-1];
    }

    size() {
        return this.index;
    }
}