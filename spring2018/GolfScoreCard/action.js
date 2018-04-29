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
    $('.selectNewDifficulty').html("");

    $('.teeDropdown').append('<option>Select a Difficulty</option>');
    $('.selectNewDifficulty').append('<option>Select a Difficulty</option>');
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

function showNewDif() {
    $('.selectNewDifficulty').show();
}

function appendNewDifTotals(totalYardsIn, totalParIn, totalHCPIn, totalYardsOut, totalParOut, totalHCPOut) {
    $('#yardsIn').after('<div>'+ totalYardsIn +'</div>');
    $('#yardsOut').after('<div>'+ totalYardsOut +'</div>');
    $('#yardsTot').after('<div>'+ (totalYardsIn + totalYardsOut) +'</div>');
    $('#parIn').after('<div>'+ totalParIn +'</div>');
    $('#parOut').after('<div>'+ totalParOut +'</div>');
    $('#parTot').after('<div>'+ (totalParIn + totalParOut) +'</div>');
    $('#hcpIn').after('<div>'+ totalHCPIn +'</div>');
    $('#hcpOut').after('<div>'+ totalHCPOut +'</div>');
    $('#hcpTot').after('<div>'+ (totalHCPIn + totalHCPOut) +'</div>');
}

function addNewDifficulty(teeIndex) {
    let mycourse = selcourse.data.holes;

    let holeOneTees = selcourse.data.holes[0].teeBoxes;


    $('#rowTitleYards').after('<div class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'Yards' + '</div>');
    $('#rowTitlePar').after('<div class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'Par' + '</div>');
    $('#rowTitleHCP').after('<div class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'HCP' + '</div>');

    for(let i = 0; i < mycourse.length; i++){

        $('#yards'+i).after('<div class="yards">'+ mycourse[i].teeBoxes[teeIndex].yards +'</div>');
        $('#par'+i).after('<div class="par">'+ mycourse[i].teeBoxes[teeIndex].par +'</div>');
        $('#hcp'+i).after('<div class="hcp">'+ mycourse[i].teeBoxes[teeIndex].hcp +'</div>');

    }

    addUpTotals(mycourse, teeIndex);
    appendNewDifTotals(totalYardsIn, totalParIn, totalHCPIn, totalYardsOut, totalParOut, totalHCPOut);
    zeroTotals();


}

function setTee(teeIndex) {
    let mycourse = selcourse.data.holes;
    let holeOneTees = selcourse.data.holes[0].teeBoxes;
    clearLeftnRight();
    appendRowTitles(holeOneTees ,teeIndex);

    addUpTotals(mycourse, teeIndex);

    for(let i = 0; i < mycourse.length; i++){
        $('.right').append(
            '<div class="column" id="c'+ i +'">'+
            '<div class="cheader">' +(i+1) +'</div>'+
            '<div id="yards'+ i +'" class="yards">'+ mycourse[i].teeBoxes[teeIndex].yards +'</div>'+
            '<div id="par'+ i +'" class="par">'+ mycourse[i].teeBoxes[teeIndex].par +'</div>'+
            '<div id="hcp'+ i +'" class="hcp">'+ mycourse[i].teeBoxes[teeIndex].hcp +'</div>'+
            '</div>');
    }
    totalsIn(totalYardsIn, totalParIn, totalHCPIn);
    totalOut(totalYardsOut, totalParOut, totalHCPOut);
    totalTot(totalYardsIn, totalParIn, totalHCPIn, totalYardsOut, totalParOut, totalHCPOut);
    playerHeader();
    buildCard();
    zeroTotals();
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
        '<div id="rowTitlePar" class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'Par' + '</div>'+
        '<div id="rowTitleHCP" class="rowTitle">'+ holeOneTees[teeIndex].teeType + 'HCP' + '</div>'+
        '</div>'
    );
}

//function for totaling IN OUT TOT and appending them

function addUpTotals(mycourse, teeIndex) {
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
}

function zeroTotals() {
    totalYardsIn = 0;
    totalYardsOut = 0;
    totalParIn = 0;
    totalParOut = 0;
    totalHCPIn = 0;
    totalHCPOut = 0;
}

function totalsIn(totalYardsIn, totalParIn, totalHCPIn) {
    $('#c8').after(
        '<div class="column" id="totalIn">'+
        '<div class="totalsIN">IN</div>'+
        '<div id="yardsIn">'+ totalYardsIn +'</div>'+
        '<div id="parIn">'+ totalParIn +'</div>'+
        '<div id="hcpIn">'+ totalHCPIn +'</div>'+
        '</div>'
    );
}

function totalOut(totalYardsOut, totalParOut, totalHCPOut) {
    $('.right').append(
        '<div class="column" id="totalOut">'+
        '<div class="totals">OUT</div>'+
        '<div id="yardsOut">'+ totalYardsOut +'</div>'+
        '<div id="parOut">'+ totalParOut +'</div>'+
        '<div id="hcpOut">'+ totalHCPOut +'</div>'+
        '</div>'
    );
}

function totalTot(totalYardsIn, totalParIn, totalHCPIn, totalYardsOut, totalParOut, totalHCPOut) {
    $('.right').append(
        '<div class="column" id="totalScore">'+
        '<div class="totalsTot">TOT</div>'+
        '<div id="yardsTot">'+ (totalYardsIn + totalYardsOut) +'</div>'+
        '<div id="parTot">'+ (totalParIn + totalParOut) +'</div>'+
        '<div id="hcpTot">'+ (totalHCPIn + totalHCPOut) +'</div>'+
        '</div>'
    );
}

//function for totaling IN OUT TOT and appending them


function buildCard() {

    for(let p = 1; p <= numplayers; p++){
        $('.playerMain').append(
            '<div id="playerRow'+ p +'" class="playerLabel player'+ p +'">' +
            '<span class="playersName" contenteditable="true">Player '+ p +'</span>' +
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
    //add a modal to display the player end of game scores
    //check to make sure all inputs fields have a number value
    //add each players totals up subtract par
    //display each players score and a message if they did well or not
    //add an option to apply HCP to the players score
}

function removePlayer(e){
    let playerToRemove = e.classList[3];
    $('.'+playerToRemove).remove();

}