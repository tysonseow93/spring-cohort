class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.firstNode = null;
    this.listSize = 0;
  }

  size() {
    return this.listSize;
  }

  remove(valueToRemove) {
    let previousNode = this.firstNode;
    let currentNode = previousNode.next;

    let foundValue = valueToRemove = currentNode.value;

    while (!foundValue) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      
      if (!currentNode) {
        return null;
      }

      foundValue = valueToRemove = currentNode.value;
    }

    let nextNode = currentNode.next;

    if (currentNode === this.firstNode) {
      this.firstNode = nextNode;
    } else {
      previousNode.next = nextNode;
    }


  }

  insert(newValue) {
    let nodeToInsert = new Node(newValue);
    this.listSize++;
    
    if (!this.firstNode) {
      this.firstNode = nodeToInsert;
    } else {
      let currentNode = this.firstNode;
      
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = nodeToInsert;
    }
  }

  contains(value) {
      if(value === this.firstNode){
          return true;
      }
      let currentNode = this.firstNode;

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
}