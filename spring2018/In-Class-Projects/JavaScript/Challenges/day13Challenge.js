let userInput = prompt("Guess a number 1 - 10");


    let randomNum = Math.random();
    let wholeNum = Math.trunc(randomNum *10)+1;

    while (wholeNum !== userInput) {
        if (wholeNum === userInput) {
            alert("Correct you win!");
        }
        else {
            confirm("Try again");
            prompt("Guess a number 1 - 10");
        }
    }

function mathStuff() {
    let boxOne = document.getElementById("box1");
    let boxTwo = document.getElementById("box2");
    let answer = document.getElementById("answer");
    answer.innerHTML = "multiplied " + boxOne * boxTwo + " divide " + boxOne / boxTwo;
}
