var numplayers = 4;
var allCourses;
var selcourse;

loadDoc();

function loadDoc() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            allCourses = JSON.parse(this.responseText);
            console.log(allCourses);
            for(let i = 0; i < allCourses.courses.length; i++){
                $('.coursesDropdown').append(
                    '<option value="'+ allCourses.courses[i].id +'">'
                    + allCourses.courses[i].name +
                    '</option>');
            }
        }

    };
    xhttp.open("get", "https://www.uxcobra.com/golfapi/courses.txt", true);
    xhttp.send();
}

function getCourse(courseId) {
    $('.teeDropdown').html("");
    $('.teeDropdown').append('<option>Select a Difficulty</option>');
    console.log(courseId);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            selcourse = JSON.parse(this.responseText);
            console.log(selcourse);
            let holeOneTees = selcourse.data.holes[0].teeBoxes;

            for(let i = 0; i < holeOneTees.length; i++){
                $('.teeDropdown').append(
                                        '<option value="'+ i +'">' +
                                         holeOneTees[i].teeType +
                                        '</option>');
            }
        }
    };
    xhttp.open("get", "https://www.uxcobra.com/golfapi/course"+ courseId +".txt", true);
    xhttp.send();

}


function setTee(teeIndex) {
    $('.right').html('');
    $('.right').append(
        '<div class="column">'+
        '<div class="cheader">' + 'Hole' + '</div>'+
        '<div class="yards">'+ 'Yards' + '</div>'+
        '<div class="par">'+ 'Par' + '</div>'+
        '<div class="hcp">'+ 'HCP' + '</div>'+
        '</div>'
    );
    let totalYardsIn = 0;
    let totalYardsOut = 0;
    let totalParIn = 0;
    let totalParOut = 0;

    let mycourse = selcourse.data.holes;
    for(let i = 0; i < mycourse.length; i++){
        if(i <= 8){
            totalYardsIn += Number(mycourse[i].teeBoxes[teeIndex].yards);
            totalParIn += Number(mycourse[i].teeBoxes[teeIndex].par);
        }
        if(i < mycourse.length && i >= 9){
            totalYardsOut += Number(mycourse[i].teeBoxes[teeIndex].yards);
            totalParOut += Number(mycourse[i].teeBoxes[teeIndex].par);
        }

        $('.right').append(
            '<div class="column" id="c'+ i +'">'+
            '<div class="cheader">' +(i+1) +'</div>'+
            '<div class="yards">'+ mycourse[i].teeBoxes[teeIndex].yards +'</div>'+
            '<div class="par">'+ mycourse[i].teeBoxes[teeIndex].par +'</div>'+
            '<div class="hcp">'+ mycourse[i].teeBoxes[teeIndex].hcp +'</div>'+
            '</div>');
    }


    $('#c8').after(
        '<div class="column">'+
        '<div class="totals" id="totalIn">IN</div>'+
        '<div class="yards">'+ totalYardsIn +'</div>'+
        '<div class="par">'+ totalParIn +'</div>'+
        '</div>'
    );
    $('.right').append(
        '<div class="column">'+
        '<div class="totals" id="totalOut">OUT</div>'+
        '<div class="yards">'+ totalYardsOut +'</div>'+
        '<div class="par">'+ totalParOut +'</div>'+
        '</div>'+
        '<div class="column">'+
        '<div class="totals" id="totalScore">TOT</div>'+
        '<div class="yards"></div>'+
        '<div class="par"></div>'+
        '</div>'

    );
    buildCard();
}
function buildCard() {
    $('.left').html('');
    $('.left').append(
        '<div class="playerCol">'+
        '<div class="playerHeader">Players</div>'+
        '<div class="playerMain"></div>'+
        '</div>'
    );
    for(let p = 1; p <= numplayers; p++){
        $('.playerMain').append('<div id="playerRow'+ p +'" class="playerLabel" contenteditable="true">Player '+ p +'</div>');
        for(let h = 0; h < selcourse.data.holes.length; h++){

            $('#c' + h).append('<input type="number" class="holeInput" id="p' + p + 'h' + h + '" type="text">');
        }
    }
}

$(document).ready(function () {
    $(document).on('change', '.holeInput', function(){
        let totalp1in = 0;
        let totalp1out = 0;
        let totalp2in = 0;
        let totalp2out = 0;
        let totalp3in = 0;
        let totalp3out = 0;
        let totalp4in = 0;
        let totalp4out = 0;
        let courseLen = selcourse.data.holes.length;
        for(let p = 1;  p <= numplayers; p++){
            if(1 === p){
                for(let h = 0; h < courseLen; h++){
                    if(h <= 8){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp1in += Number(selectedInput.val());
                    }
                    if(h < courseLen && h >= 9){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp1out += Number(selectedInput.val());
                    }
                }
            }
            if(2 === p){
                for(let h = 0; h < courseLen; h++){
                    if(h <= 8){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp2in += Number(selectedInput.val());
                    }
                    if(h < courseLen && h >= 9){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp2out += Number(selectedInput.val());
                    }
                }
            }
            if(3 === p){
                for(let h = 0; h < courseLen; h++){
                    if(h <= 8){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp3in += Number(selectedInput.val());
                    }
                    if(h < courseLen && h >= 9){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp3out += Number(selectedInput.val());
                    }
                }
            }
            if(4 === p){
                for(let h = 0; h < courseLen; h++){
                    if(h <= 8){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp4in += Number(selectedInput.val());
                    }
                    if(h < courseLen && h >= 9){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalp4out += Number(selectedInput.val());
                    }
                }
            }

        }


        console.log('----------------');
        console.log(totalp1in);
        console.log(totalp1out);
        console.log('///////////');
        console.log(totalp2in);
        console.log(totalp2out);
        console.log('///////////');
        console.log(totalp3in);
        console.log(totalp3out);
        console.log('///////////');
        console.log(totalp4in);
        console.log(totalp4out);
        console.log('----------------');
    });

});