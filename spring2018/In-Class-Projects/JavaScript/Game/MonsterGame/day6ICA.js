
// JavaScript Document


// create an array of food items for the monster to eat
var foodarr = ["cheese", "candy", "children", "ice cream", "pizza", "cats"];
var currentfood = "";

// start the game with a function
function rungame(){
    getfood();
    // get food and set food
}

// randomly select a food to put in the box
function getfood(){
    var randomfood = Math.floor((Math.random() * foodarr.length) + 0);
    setfood(foodarr[randomfood]);
}

// put the food in the box
function setfood(food){
    currentfood = food;
    document.getElementById("foodbox").innerHTML = food;
}

function eatit(){
    //if the food is good
    if(currentfood == "children" || currentfood == "pizza" || currentfood == "cats"){
        document.getElementById("commentbox").innerHTML = "GOOD FOOD!";
    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "I KILL YOU HUMAN!";
    }
    getfood();
}

function trashit(){
    //if the food is good
    if(currentfood == "cheese" || currentfood == "candy" || currentfood == "ice cream"){
        document.getElementById("commentbox").innerHTML = "GOOD HUMAN!";

    }
    // if the food is bad
    else{
        document.getElementById("commentbox").innerHTML = "I KILL YOU HUMAN!";
    }
    getfood();
}

