describe('stack', () => {
  let stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('push', () => {
    it('should add the value to the stack array when the array is empty', () => {
      stack.array = [];
      stack.push(1);
      expect(stack.array.length).toEqual(1);
    });
    it('should add new values to the end of the stack array', () => {
      let expected = [1, 2, 3];
      
      stack.push(1);
      stack.push(2);
      stack.push(3);
      
      expect(stack.array).toEqual(expected);
    });
  });
  
  describe('pop', () => {
    it('should return and remove the top item from the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      let popResult = stack.pop();
      expect(popResult).toEqual(3);

      popResult = stack.pop();
      expect(popResult).toEqual(2);

      popResult = stack.pop();
      expect(popResult).toEqual(1);
    });
    it('should return null if the stack is empty', () => {
      let popResult = stack.pop();
      expect(popResult).toBeNull();
    });
  });

  describe('peek', () => {
    it('should return the top item from the stack but not remove it', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);

      let popResult = stack.peek();
      expect(popResult).toEqual(3);

      popResult = stack.peek();
      expect(popResult).toEqual(3);

      popResult = stack.peek();
      expect(popResult).toEqual(3);
    });
    it('should return null if the stack is empty', () => {
      let peekResult = stack.peek();
      expect(peekResult).toBeNull();
    });
  });

  describe('size', () => {
    it('should return the number of items currently in the stack', () => {
      let stackSize = stack.size();
      expect(stackSize).toEqual(0);

      stack.push(1);
      stackSize = stack.size();
      expect(stackSize).toEqual(1);

      stack.push(2);
      stackSize = stack.size();
      expect(stackSize).toEqual(2);

      stack.pop()
      stackSize = stack.size();
      expect(stackSize).toEqual(1);
    });
  });
});