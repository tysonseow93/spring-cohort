
 function createAList() {
    let listname = $('#createinput').val();

     $('.main').append(
         '<div class="list-box">'
            +'<div class="header">'
                + '<div class="headleft">'
                    + listname
                + '</div>'
                +'<div class="headright">'
                     + '<input id="inlineCreate" type="text">'
                     + '<button class="listItem" onclick=createAListItem()>Add Items</button>'
                    + '<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo" onclick="addItem(this)">Add Items</button>'
                +'</div>'
            +'</div>'
            + '<div class="list">'
                    + '<ul class="todolist">'
                    // + 'List Label'
                    + '</ul>'
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
 let listIdNum = 0;

function createAListItem(){

    listIdNum = listIdNum + 1;

    let listItemValue = $('#inlineCreate').val();

    let listItem = '<li id="item'+ listIdNum + '">' + listItemValue + '</li>';

    $('.todolist').append(listItem);

    $('#inlineCreate').val("");
}

 function createListItemInline(element){
     let listItem = $('#createItemInput').val();
     $(element).parent().parent().find('.todolist').append('<li>' + listItem + '</li>');
     $('#inlineCreate').val("");
 }

//using the modal to add list items

// let activeList;
//
// // let listItem = $('#createItemInput').val();
//
//
// function addItem(element) {
//
//      activeList = $(element).parent().parent().find('.todolist');
//     //open modal
// }
//
// //this function is called when the modal as is pushed
//
// function saveToDoItem(listItem) {
//      $(activeList).append('<li>' + listItem + '</li>');
// }