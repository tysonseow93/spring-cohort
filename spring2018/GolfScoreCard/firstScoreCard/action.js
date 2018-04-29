var numplayers = 4;
var course;

loadDoc();



function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200){
            course = JSON.parse(this.responseText);
            console.log(course);
            let selectTees = course.holes[0].tees;
            for(let i = 0; i < selectTees.length; i++){
                $("#teeSelect").append("<option value='"+ i +"'>"+ selectTees[i].teeName + "</option>");
            }
            createScoreCard();

            }

    };
    xhttp.open("get", "holes.txt", true);
    xhttp.send();

    function createScoreCard(){

        for (let i = 0 ; i < course.holes.length; i++){
            $('.scoreCardHeader').append('<div class="cHeader">'+ course.holes[i].name + '</div>');
            // need to change it so it appends a row of course.holes.length
            //$('.somearea').append('<div id="col'+ i + '" class="column">' + '</div>');
        }

        fillCard();

        function fillCard(){
            for(let p = 0; p < numplayers; p++){

                $('.left').append('<div id="playerRow'+ (p+1) +'" class="playerLabel" contenteditable="true">player'+ (p+1) +'</div>');

                for(let h = 0; h < course.holes.length; h++){
                    $('#col' + h).append('<input type="number" class="holeInput" id="p' + p + 'h' + h + '" type="text">');
                }
            }
        }
    }

}

//create a selector the chooses champ, pro, mens, or womens. it would be best if you base it on the index.





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

