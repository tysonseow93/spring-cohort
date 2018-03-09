

document.getElementById("selector").addEventListener("change", mySelector );
document.getElementById("btn").addEventListener("click", myFunction );



    function mySelector() {

        let sIndex = document.getElementById("selector").selectedIndex;
        let sOptions = document.getElementById("selector").options;
        let shape = sOptions[sIndex].text;

        // switch (shape) {
        //     case shape === "Select a shape":
        //         document.getElementById("measurement").innerText = "";
        //         break;
        //     case "Circle":
        //         document.getElementById("measurement").innerText = "enter radius: ";
        //         break;
        //     case "Triangle":
        //         document.getElementById("measurement").innerText = "enter side length: ";
        //         break;
        //     case "Square":
        //         document.getElementById("measurement").innerText = "enter side length: ";
        //         break;


            if (shape === "Circle") {
                document.getElementById("measurement").innerHTML = "radius";
                console.log("radius");
            }
            else if (shape === "Square") {
                document.getElementById("measurement").innerHTML = "side length";
            }
            else if (shape === "Triangle"){
                document.getElementById("measurement").innerHTML = "side length";
            }
            else{
                document.getElementById("measurement").innerHTML = "";
            }
        }
function myFunction() {

    let input       =    document.getElementById("myNumber").value;
    let sIndex      =    document.getElementById("selector").selectedIndex;
    let sOptions    =    document.getElementById("selector").options;
    let shape       =    sOptions[sIndex].text;
    let answer;

   switch (shape){
       case "Circle":
           answer = input * (2 * pie);
           document.getElementById("output").innerHTML = answer;
           break;
       case "Triangle":
           output = input * 3;
           document.getElementById("output").innerHTML = answer;
           break;
       case "Square":
           output = input * 4;
           document.getElementById("output").innerHTML = answer;
           break;
   }

    // if (shape === "Circle") {
    //     output = input * (2 * pie);
    //     document.getElementById("output").innerHTML = output;
    // }
    // else if (shape === "Square") {
    //     output = input * 4;
    //     document.getElementById("output").innerHTML = output;
    // }
    // else{
    //     output = input * 3;
    //     document.getElementById("output").innerHTML = output;
    // }

}
