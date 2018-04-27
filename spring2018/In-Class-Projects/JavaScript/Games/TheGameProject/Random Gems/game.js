let rupeeNumber = 10;
let mybox = document.getElementById('rupeebox');

loadRupees();

function loadRupees() {
    for(let i =0; i<= rupeeNumber; i++){
        let randomtop = Math.floor((Math.random()* 480)+1);
        let randomleft = Math.floor((Math.random()* 480)+1);

        mybox.innerHTML += "<img class='rupee' style='left: "+randomleft+"px; top: "+randomtop+"px;' src='rupee.gif'>";
    }
}