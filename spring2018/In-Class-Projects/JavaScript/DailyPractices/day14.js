let myString = "something";
let myStringTwo = "here";
let together = myString.concat(myStringTwo);
console.log(together);

$('.searchBox').keyup(function(e){
    searchThing($(this).val(),e);
});

function searchThing(theString, event) {

    if(event.which === 13){
        console.log("You pushed the enter key");
    }

    let myMeat = $('.meatWords').html();
    // console.log(myMeat);

    if(myMeat.toLowerCase().includes(theString)){
        console.log("found: " + theString);
    }
    else {
        console.log("Not found: " + theString);
    }
}

let x = 50;
console.log(x);
let y = 0xCE;
console.log(y);
let z = 150;
console.log(z);

let randum = Math.random();
console.log(Math.trunc(randum*10)+1);