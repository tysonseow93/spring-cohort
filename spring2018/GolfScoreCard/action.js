var holes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
var numplayers = 4;

function createScoreCard(){
    let holesLength = holes.length;
    for (let i = 0 ; i < holesLength; i++){
        $('.right').append('<div class="cHeader">'+ 'Hole #' + (i + 1) +  '<div id="col'+ i + '" class="column">' + '</div></div>');
    }

    fillCard();

    function fillCard(){
        for(let p = 0; p < numplayers; p++){

            $('.left').append('<div class="playerLabel" contenteditable="true">player'+ (p+1) +'</div>');

            for(let h = 0; h < holes.length; h++){
                $('#col' + h).append('<input type="number" class="holeInput" id="p' + p + 'h' + h + '" type="text">');
            }
        }
    }
}

$(document).ready(function () {
    $(document).on('click', '.holeInput', function(){
        let totalp1 = 0;
        let totalp2 = 0;
        let totalp3 = 0;
        let totalp4 = 0;

        for(let p = 0;  p < numplayers; p++){
            if(1 === (p+1)){
                for(let h = 0; h < holes.length; h++){
                    let selectedInput = $('#p'+p+'h'+h);
                    totalp1 += Number(selectedInput.val());
                }
            }
            if(2 === (p+1)){
                for(let h = 0; h < holes.length; h++){
                    let selectedInput = $('#p'+p+'h'+h);
                    totalp2 += Number(selectedInput.val());
                }
            }
            if(3 === (p+1)){
                for(let h = 0; h < holes.length; h++){
                    let selectedInput = $('#p'+p+'h'+h);
                    totalp3 += Number(selectedInput.val());
                }
            }
            if(4 === (p+1)){
                for(let h = 0; h < holes.length; h++){
                    let selectedInput = $('#p'+p+'h'+h);
                    totalp4 += Number(selectedInput.val());
                }
            }

        }
        console.log(totalp1);
        console.log(totalp2);
        console.log(totalp3);
        console.log(totalp4);
    });

});

