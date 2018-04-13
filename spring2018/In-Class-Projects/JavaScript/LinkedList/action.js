class LinkedList{
    constructor(){
        this.start = new Node(); // node
        this.size = 0;

    }
    //add value
    insert(value){

        //make a new node and set the value
        // if start is null then set start equal to the new node
        //otherwise
        //get the last node it the list
        //set the last node's next property equal to the new node
    }

    remove(value){
        //remove a value
    }

    contains(value){
        //search for a value
        //if the value of the start node equals value then return true
        //while we have not found the value get the next node and check it's value
        var nextNode = this.start;
        //if nextNode.value !== value
        nextNode = nextNode.next;

        //if the value is found return true
        //if the next node is null, then we've reached the end of the list
        // without finding it return false
    }

    size(){

    }

}

var list = new LinkedList();
    list.size();
    list.insert(5);
    list.insert(6);
    list.insert(9);
    list.insert(10);

//[5] -> [6] -> [9] -> [10]