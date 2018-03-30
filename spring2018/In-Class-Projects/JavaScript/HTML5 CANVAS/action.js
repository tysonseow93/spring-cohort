let drawCanvas = document.getElementById("myCanvas");
let ctx = drawCanvas.getContext("2d");

drawCanvas.addEventListener("click", onPress);

function onPress(evt) {
    let mouseX = evt.offsetX;
    let mouseY = evt.offsetY;


    console.log(mouseX, mouseY);
}

// ctx.beginPath();
// ctx.moveTo(50, 50);
// ctx.lineTo(350, 75);
// ctx.lineTo(250, 250);
// ctx.closePath();
// ctx.stroke();
//
// ctx.fillStyle = "rgba(0,0,0,0.5)";
// ctx.fill();
