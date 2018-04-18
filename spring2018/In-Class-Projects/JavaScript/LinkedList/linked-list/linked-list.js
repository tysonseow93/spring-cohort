class LinkedList {
  
  constructor() {
    this.start;
    this.size = 0;
  }

  insert(value) {
    var newNode = new Node(value);
    this.size++;

    if(!this.start){
        this.start = newNode;
        return;
    }

    var currentNode = this.start;
    while(currentNode.next !== null){
      currentNode = currentNode.next;
    }

    currentNode.next = newNode;


  }

    removeFromHead() {
        if (this.size === 0) {
            return undefined;
        }

        const value = this.start.value;
        this.start = this.start.next;
        this.size--;

        return value;
    }

  remove(value) {
      var previousNode, currentNode;
      previousNode = this.start;
      currentNode = previousNode.next;
      if(this.contains(value) === true){
          this.size--;
          while(value !== currentNode.value){
              previousNode = previousNode.next;
              if(previousNode === null){
                  return false;
              }
              if(this.start.value === value){
                  this.start = this.start.next;
              }
              if(currentNode.value === value){
                  previousNode.next = currentNode;
                  currentNode = currentNode.next;
              }
          }
      }

          //link previous item to next item and remove current item

      if(this.size === 0) {
          return undefined;
      }
      if (this.start.value === value) {
          this.removeFromHead();
          return this;
      }
      let previousNode = this.start;
      let thisNode = previousNode.next;
      while(thisNode) {
          if(thisNode.value === value) {
              break;
          }
          previousNode = thisNode;
          thisNode = thisNode.next;
      }
      if (thisNode === null) {
          return undefined;
      }
      previousNode.next = thisNode.next;
      this.size--;

  }

  contains(value) {
    if(value === this.start){
      return true;
    }
    var currentNode = this.start;

    while(value !== currentNode.value){
      currentNode = currentNode.next;
      if(currentNode === null){
        return false;
      }
    }
    if(currentNode.value === value){
      return true;
    }

  }

  size() {
    return this.size;
  }
}