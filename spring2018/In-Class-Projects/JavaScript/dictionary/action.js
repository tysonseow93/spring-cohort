
class Dictionary{
    constructor(){
        this.dataStore = {};
        this.add = function(key, value){
            this.dataStore[key] = value;
        }
        this.find = find;
        this.remove = remove;
        this.showAll = showAll;
        
    }
    
}

function find(key) {
    //console.log(key);
    $('.stuff').html(this.dataStore[key]);
}

function remove(key) {
    delete this.dataStore[key];
}

function showAll() {
    for(var key in this.dataStore){
        console.log(key + " -> " + this.dataStore[key]);
    }
}

let pBook = new Dictionary();
pBook.add("Tyson", "801-560-7144");
pBook.add("Keisha", "801-696-7529");
pBook.add("David", "801-123-4567");
pBook.add("Randi", "123-4567-8901");
pBook.showAll();

pBook.find("Tyson");
pBook.remove("Randi");

// $(document).ready(function() {
//     $(document).on( 'click', '#findBtn', function(){
//         let inputValue = $('#dictionaryInput').val();
//         pBook.find(inputValue);
//         $('.stuff').append(this.dataStore[inputValue]);
//     });
// });



