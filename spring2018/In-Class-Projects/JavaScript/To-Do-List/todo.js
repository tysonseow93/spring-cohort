

 function createAList() {
    let listname = $('#createinput').val();
     $('.main').append('<div class="header">'+ '<div class="headleft">' +listname+ '</div>'
     +'<div class="headright">'+
         'add list stuff'
     +'</div>'+ '</div>' + '<div class="list">' + '<div class="todolist">' + 'list Item' + '</div> </div>')
     $('#createinput').val("");
 }

