// function runCode(obj) {
//     console.log(obj.id);
// }

let Menu = function(){

    this.stopMusic = function () {
        bgMusic.pause();
    };
    this.playGame = function(){

    };
    this.addWords = function(){

    };

};

let Reflector = function(obj){

    let methods = [];
    for(let method in obj){
        if(typeof obj[method] === "function"){
            methods.push(method);
        }

    };
    return methods;
}

let myMenu = new Menu();
let mirror = new Reflector(myMenu);



let bgMusic = new Audio("Goat.mp3");
bgMusic.play()

$(".introbtn").draggable();

$(".introbtn").click(function() {
    // fires when click occurs
    $(".intro").hide();
    $(".menupage").show();
    let menuArray = mirror;
    for(let i = 0; i < menuArray.length; i++){
        $(".menupage").append('<a href="javascript: myMenu.' + menuArray[i] + "()'>" + menuArray[i] + "</a>")
    }
});

// function goToMenu() {
    // some code
// }

