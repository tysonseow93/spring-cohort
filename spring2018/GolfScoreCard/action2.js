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
    console.log(courseId);
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {

        if (this.readyState == 4 && this.status == 200) {
            selcourse = JSON.parse(this.responseText);
            console.log(selcourse);
            let holeOneTees = selcourse.data.holes[0].teeBoxes;

            for(let i = 0; i < holeOneTees.length -1; i++){
                $('.teeDropdown').append('<option value="'+ i +'">' +
                                         holeOneTees[i].teeType +
                                        '</option>');
            }
        }
    };
    xhttp.open("get", "https://www.uxcobra.com/golfapi/course"+ courseId +".txt", true);
    xhttp.send();

}

function setTee(teeIndex) {
    $('.right').html("");

    let mycourse = selcourse.data.holes;
    for(let i = 0; i < mycourse.length; i++){
        $('.right').append(
            '<div class="column" id="c'+ i +'">'+
            '<div class="cheader">' + 'hole #' +(i+1) +'</div>'+
            '<div class="par">'+ 'par ' + mycourse[i].teeBoxes[teeIndex].par +'</div>'+
            '<div class="yards">'+ 'yards ' + mycourse[i].teeBoxes[teeIndex].yards +'</div>'+
            '<div class="hcp">'+ 'HCP ' + mycourse[i].teeBoxes[teeIndex].hcp +'</div>'+
            '</div>');
    }

    buildCard();
}
function buildCard() {
    for(let p = 1; p <= numplayers; p++){
        $('.left').append('<div id="playerRow'+ (p+1) +'" class="playerLabel" contenteditable="true">player'+ (p+1) +'</div>');
        for(let h = 0; h < selcourse.data.holes.length; h++){
            $('#c' + h).append('<input type="number" class="holeInput" id="p' + p + 'h' + h + '" type="text">');

        }
    }
}