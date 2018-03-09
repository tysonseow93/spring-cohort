function myFunction() {

    let x = document.getElementById("myNumber").value;

    if (x % 5 === 0 && x % 3 === 0) {
        document.getElementById("output").innerHTML = "FizzBuzz";
    }

    else if (x % 5 === 0) {
        document.getElementById("output").innerHTML = "Buzz";
    }

    else if (x % 3 === 0) {
        document.getElementById("output").innerHTML = "Fizz";
    }

    else {
        document.getElementById("output").innerHTML = x;
    }

}