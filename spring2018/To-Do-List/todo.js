
 function createAList() {
    let listname = $('#createinput').val();

     $('.main').append(
         '<div class="list-box">'
            +'<div class="header">'
                + '<div class="headleft">'
                    + listname
                + '</div>'
                +'<div class="headright">'
                    // + '<input type="text" class="createItemInput"> '
                    + '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo" onclick="addItem(this)">Add Items</button>'
                +'</div>'
            +'</div>'
            + '<div class="list">'
                + '<div class="todolist">'
                    + '<ul'
                    // + 'List Label'
                    + '</ul>'
                + '</div>'
            + '</div>'
         +'</div>');

     $('#createinput').val("");
     $('.main').show(this);
 }

function removeList(){

}

function removeListItem() {
    
}

function markListComplete() {

}

function markListItemComplete(){
    
}

function createAListItem(){
    let listItem = $('#createItemInput').val();
    $('.todolist').append('<li>' + listItem + '</li>');

    $('#createItemInput').val("");

}

//using the modal to add list items

let activeList;

let listItem = $('#createItemInput').val();


function addItem(element) {

     activeList = $(element).parent().parent().find('.todolist');
    //open modal
}

//this function is called when the modal as is pushed

function saveToDoItem(listItem) {
     $(activeList).append('<li>' + listItem + '</li>');
}