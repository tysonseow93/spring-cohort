// function createAList() {
//     let listname = $('#createinput').val();
//      $('.main').append(
//          '<div class="list-box">'
//             +'<div class="header">'
//                 + '<input type="checkbox" class="markCompleteList">'
//                 + '<div class="fa fa-trash"></div>'
//                 + '<div class="headleft">'
//                     + listname
//                 + '</div>'
//                 +'<div class="headright">'
//                     + '<button type="button" class="addItem btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo">Add Items</button>'
//                 +'</div>'
//             +'</div>'
//             + '<div class="list">'
//                     + '<ul class="todolist">'
//                     + '</ul>'
//             + '</div>'
//          +'</div>');
//      $('#createinput').val("");
//      $('.main').show(this);
//  }

$(document).ready(function() {
     let $active;
     $(document).on( 'click', '#createBtn', function(){
         let listname = $('#createinput').val();
         $('.main').append(`
                 <div class="list-box">
                    <div class="header">
                        <input type="checkbox" class="markCompleteList">
                        <div class="fa fa-trash"></div>
                        <div class="headleft" contenteditable="true">${listname}</div>
                        <div class="headright">
                            <button type="button" class="addItem btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo">Add Items</button>
                        </div>
                    </div>
                    <div class="list">
                        <ul class="todolist"></ul>
                    </div>
                </div>`);
         $('#createinput').val("");
         $('.main').show(this);
     });

     $(document).on( 'click', '.addItem', function(e){
         let $button = $(this);
         $active = $button.closest('.list-box');
         e.stopPropagation();
     });
     $(document).on("click", ".markCompleteList", function() {
         $(this).parent().parent('.list-box').toggleClass("completed");
     });
     $(document).on("click", ".fa-trash",function () {
         $(this).parent().parent('.list-box').remove();
     });
    $(document).on("click", ".fa-trash",function () {
        $(this).parent().remove();
    });
     $(document).on('click', '#createItemBtn',function(){
         let listItem = $('#createItemInput').val();
         $active.find('.todolist').append('<div class="todoitem">' + '<input type="checkbox" class="markComplete">' + '<li contenteditable="true">' + listItem + '</li>'+'<div class="fa fa-trash"></div>'+'</div>');
         $('#createItemInput').val("");
     });
     $(document).on("click", ".markComplete", function() {
         $(this).siblings("li").toggleClass("completed");
     });
     $('#addListModal').on('shown.bs.modal', function () {
         $('#createinput').trigger('focus')
     });
     $('#addItemModal').on('shown.bs.modal', function () {
         $('#createItemInput').trigger('focus')
     });

 //THIS NEEDS WORKED ON MORE
     $( '#addListModal' ).on( 'keypress', function( e ) {
         if( e.keyCode === 13 ) {
             e.preventDefault();
             let listname = $('#createinput').val();
             $('.main').append(`
                 <div class="list-box">
                    <div class="header">
                        <input type="checkbox" class="markCompleteList">
                        <div class="fa fa-trash"></div>
                        <div class="headleft" contenteditable="true">${listname}</div>
                        <div class="headright">
                            <button type="button" class="addItem btn btn-primary" data-toggle="modal" data-target="#addItemModal" data-whatever="@mdo">Add Items</button>
                        </div>
                    </div>
                    <div class="list">
                        <ul class="todolist"></ul>
                    </div>
                </div>`);
             $('#createinput').val("");
             $('.main').show(this);
         }
     });
     $( '#addItemModal' ).on( 'keypress', function( e ) {
         if( e.keyCode === 13 ) {
             e.preventDefault();
             let listItem = $('#createItemInput').val();
             $active.find('.todolist').append(`
                 <div class="todoitem">
                     <input type="checkbox" class="markComplete">
                     <li contenteditable="true">${listItem}</li>
                     <div class="fa fa-trash"></div>
                 </div>`);
             $('#createItemInput').val("");
         }
     });
 //THIS NEEDS WORKED ON MORE

 });

