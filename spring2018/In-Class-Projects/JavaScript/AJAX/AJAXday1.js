function loadDoc(){
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200){
            document.getElementById("demo").innerHTML = this.responseText;
        }

    };
    xhttp.open("get", "AJAXday1.txt", true);
    xhttp.send();
}


function loadDoc2() {
    let xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {

        if(this.readyState == 4 && this.status == 200){
            let data = this.responseText;
            let myObj = JSON.parse(data);
            console.log(myObj);
            document.getElementById("demo2").innerHTML = "<img src='http://www.openweathermap.org/img/w/" + myObj.weather[0].icon +".png'>";
            document.getElementById("demo2").innerHTML += myObj.weather[0].description;
        }


    };

    xhttp.open("get", "http://api.openweathermap.org/data/2.5/weather?q=lehi&appid=cc8ef8e5c209d938ab3801daa42b5e31", true);
    xhttp.send();

}

function jqCall() {
    $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather?q=lehi&appid=cc8ef8e5c209d938ab3801daa42b5e31",
        type: "GET",
        success: function (data, status) {
            console.log(data);
            let myObj = data;
            $('#demo3').append(myObj.weather[0].description);
        }
    });
}