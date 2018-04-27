var numplayers = 4;
var allCourses;
var selcourse;
let totalPIn, totalPOut;
let totalYardsIn = 0;
let totalYardsOut = 0;
let totalParIn = 0;
let totalParOut = 0;
let totalHCPIn = 0;
let totalHCPOut = 0;

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
                        '<option class="selDifOpt" id="selFirstDif'+ i +'" value="'+ i +'" >' + holeOneTees[i].teeType + '</option>');
                $('.selectNewDifficulty').append(
                    '<option class="selDifOpt" id="selAddDif' + i + '" value="'+ i +'">' + holeOneTees[i].teeType + '</option>');
            }

        }
    };
    xhttp.open("get", "https://www.uxcobra.com/golfapi/course"+ courseId +".txt", true);
    xhttp.send();

}



function addNewDifficulty(teeIndex) {
    let mycourse = selcourse.data.holes;
    $('.selectNewDifficulty').show();

    let holeOneTees = selcourse.data.holes[0].teeBoxes;


    $('#rowTitleYards').after('<div class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'Yards' + '</div>');

    for(let i = 0; i < mycourse.length; i++){
        $('#yards'+i).after('<div id="yards'+ i +'" class="yards">'+ mycourse[i].teeBoxes[teeIndex].yards +'</div>');
    }
    for(let i = 0; i < mycourse.length; i++) {

        if (i <= 8) {
            totalYardsIn += Number(mycourse[i].teeBoxes[teeIndex].yards);
            totalParIn += Number(mycourse[i].teeBoxes[teeIndex].par);
            totalHCPIn += Number(mycourse[i].teeBoxes[teeIndex].hcp);
        }
        if (i < mycourse.length && i >= 9) {
            totalYardsOut += Number(mycourse[i].teeBoxes[teeIndex].yards);
            totalParOut += Number(mycourse[i].teeBoxes[teeIndex].par);
            totalHCPOut += Number(mycourse[i].teeBoxes[teeIndex].hcp);
        }
    }
    $('#yardsIn').after('<div>'+ totalYardsIn +'</div>');
    $('#yardsOut').after('<div>'+ totalYardsOut +'</div>');
    $('#yardsTot').after('<div>'+ (totalYardsIn + totalYardsOut) +'</div>');


}


function setTee(teeIndex) {
    let mycourse = selcourse.data.holes;
    let holeOneTees = selcourse.data.holes[0].teeBoxes;

    clearLeftnRight();
    appendRowTitles(holeOneTees ,teeIndex);



    for(let i = 0; i < mycourse.length; i++){

        if(i <= 8){
            totalYardsIn += Number(mycourse[i].teeBoxes[teeIndex].yards);
            totalParIn += Number(mycourse[i].teeBoxes[teeIndex].par);
            totalHCPIn += Number(mycourse[i].teeBoxes[teeIndex].hcp);
        }
        if(i < mycourse.length && i >= 9){
            totalYardsOut += Number(mycourse[i].teeBoxes[teeIndex].yards);
            totalParOut += Number(mycourse[i].teeBoxes[teeIndex].par);
            totalHCPOut += Number(mycourse[i].teeBoxes[teeIndex].hcp);
        }

        $('.right').append(
            '<div class="column" id="c'+ i +'">'+
            '<div class="cheader">' +(i+1) +'</div>'+
            '<div id="yards'+ i +'" class="yards">'+ mycourse[i].teeBoxes[teeIndex].yards +'</div>'+
            '<div class="par">'+ mycourse[i].teeBoxes[teeIndex].par +'</div>'+
            '<div class="hcp">'+ mycourse[i].teeBoxes[teeIndex].hcp +'</div>'+
            '</div>');
    }

    totalsIn(totalYardsIn, totalParIn, totalHCPIn);
    totalOut(totalYardsOut, totalParOut, totalHCPOut);
    totalTot(totalYardsIn, totalParIn, totalHCPIn, totalYardsOut, totalParOut, totalHCPOut);
    playerHeader();
    buildCard();
}

function clearLeftnRight() {
    $('.left').html('');
    $('.right').html('');
}

function playerHeader(){
    $('.left').append(
        '<div class="playerCol">'+
        '<div class="playerHeader">Players</div>'+
        '<div class="playerMain"></div>'+
        '</div>'
    );
}

function appendRowTitles(holeOneTees, teeIndex){
    $('.right').append(
        '<div class="column">'+
        '<div id="rowTitleHoles" class="rowTitle">' + 'Hole' + '</div>'+
        '<div id="rowTitleYards" class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'Yards' + '</div>'+
        '<div id="rowTitlePar" class="rowTitle">'+ 'Par' + '</div>'+
        '<div id="rowTitleHCP" class="rowTitle">'+ 'HCP' + '</div>'+
        '</div>'
    );
}

function totalsIn(totalYardsIn, totalParIn, totalHCPIn) {
    $('#c8').after(
        '<div class="column" id="totalIn">'+
        '<div class="totalsIN">IN</div>'+
        '<div id="yardsIn">'+ totalYardsIn +'</div>'+
        '<div class="parIn">'+ totalParIn +'</div>'+
        '<div class="hcpIn">'+ totalHCPIn +'</div>'+
        '</div>'
    );
}

function totalOut(totalYardsOut, totalParOut, totalHCPOut) {
    $('.right').append(
        '<div class="column" id="totalOut">'+
        '<div class="totals">OUT</div>'+
        '<div id="yardsOut">'+ totalYardsOut +'</div>'+
        '<div class="parOut">'+ totalParOut +'</div>'+
        '<div class="hcpOut">'+ totalHCPOut +'</div>'+
        '</div>'
    );
}

function totalTot(totalYardsIn, totalParIn, totalHCPIn, totalYardsOut, totalParOut, totalHCPOut) {
    $('.right').append(
        '<div class="column" id="totalScore">'+
        '<div class="totalsTot">TOT</div>'+
        '<div id="yardsTot">'+ (totalYardsIn + totalYardsOut) +'</div>'+
        '<div class="parTot">'+ (totalParIn + totalParOut) +'</div>'+
        '<div class="hcpTot">'+ (totalHCPIn + totalHCPOut) +'</div>'+
        '</div>'
    );
}

function buildCard() {

    for(let p = 1; p <= numplayers; p++){
        $('.playerMain').append(
            '<div id="playerRow'+ p +'" class="playerLabel player'+ p +'">' +
            '<span contenteditable="true">Player '+ p +'</span>' +
            '<span onclick="removePlayer(this)" class="fa fa-trash player'+ p +'"></span>' +
            '</div>');
        $('#totalIn').append('<div class="scoreBox">'+'<div id="player'+ p +'scoreIn"></div>'+'</div>');
        $('#totalOut').append('<div class="scoreBox">'+'<div id="player'+ p +'scoreOut"></div>'+'</div>');
        $('#totalScore').append('<div class="scoreBox">'+'<div id="player'+ p +'totalScore"></div>'+'</div>');

        for(let h = 0; h < selcourse.data.holes.length; h++){
            $('#c'+h).append('<input type="number" class="holeInput player'+p+'" id="p'+p+'h'+h+'" type="text">');
        }
    }
}

$(document).ready(function () {
    $(document).on('change', '.holeInput', function(){
        let courseLen = selcourse.data.holes.length;
        for(let p = 1;  p <= numplayers; p++){
            totalPIn = 0;
            totalPOut = 0;
            if(p){
                for(let h = 0; h < courseLen; h++){
                    if(h <= 8){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalPIn += Number(selectedInput.val());
                        $('#player'+p+'scoreIn').html(totalPIn);
                    }
                    if(h < courseLen && h >= 9){
                        let selectedInput = $('#p'+p+'h'+h);
                        totalPOut += Number(selectedInput.val());
                        $('#player'+p+'scoreOut').html(totalPOut);
                    }
                }
                $('#player'+p+'totalScore').html(totalPIn+totalPOut);

            }
        }
    });

});

function finishGame() {
    // add a button that will display game total info totaling players scores etc.

}

function removePlayer(e){
    let playerToRemove = e.classList[3];
    $('.'+playerToRemove).remove();
}