var holes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var numplayers = 4;

function createScoreCard(){
    for (let i = 0 ; i < holes.length; i++){
        $('.right').append('<div id="col"'+ i + ' class="column"><div class="cHeader">'+ (i + 1) +'</div></div>');
    }

    fillCard();

    function fillCard(){
        for(let p = 0; p < numplayers; p++){
            $('.left').append('<div class="playerLabel" contenteditable="true">player'+ (p+1) +'</div>');

            for(let h = 0; h < holes.length; h++){
                $('#col' + h).append('<input class="holeInput" id="p' + p + 'h' + h + '" type="text">');
            }
        }
    }
}

function loadPlayers() {
    for (let i = 0; i < numplayers; i++){
    }
}