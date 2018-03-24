


$(".search-box").keyup(function (e) {

    let incString = ($(this).val());
    let patt = new RegExp(incString);

    $(".boxes p").each(function (i) {
        let result = patt.search($(this).html());
        if(result === true){
            console.log($(this));
        }
    });

});

$(".markComplete").on("click", function() {
    $(this).siblings("p").toggleClass("completed");
});

$(".fa-trash").on("click", function () {
    $(this).parent().slideUp("slow", function(){
        $(this).remove();
    });


});


// $(".boxes p").click(function(){
//     $(this).addClass("completed");
// });
