
 function createAList() {
    let listname = $('#createinput').val();

     $('.main').append(
         '<div class="list-box">'
            +'<div class="header">'
                + '<div class="headleft">'
                    + listname
                + '</div>'
                +'<div class="headright">'
                     // + '<input class="inlineCreate" type="text">'
                     // + '<button class="listItemCreate">Add Items</button>'
                    + '<button type="button" class="addItem btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo">Add Items</button>'
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

 $(document).ready(function() {
     let $active;
     $(document).on( 'click', '.addItem', function(e){
         let $button = $(this);
         $active = $button.closest('.list-box');
         e.stopPropagation();
     });

     $(document).on('click', '#createItemBtn',function(e){
         let listItem = $('#createItemInput').val();
         $active.find('.todolist').append('<li>' + listItem + '</li>');
         $('#createItemInput').val("");
     });

 })
