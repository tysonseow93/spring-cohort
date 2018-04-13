class ReversePolish {

  constructor () {
    this.stack;
  }

  calculate(rpn) {
      this.stack = new Stack();
      let stack = [];


      //loop over everything in the array
      let inputArray = rpn.split(' ');
      for(let i = 0; i < inputArray.length; i++){
          if(i === parseInt(inputArray[i])){
              stack.push(inputArray[i]);
          }
          if(i === "*" || "+" || "-" || "%" || "/" ){
              stack.push(inputArray[i]);
          }
          return stack.pop(stack);
      }


      //if the value is a number, then push it to the stack
      //if the value is a operator, pop 2 items from the stack, do the operation, push solution
      //to the stack

      //when done with the loop, pop the only item on stack and return it.


  }

}