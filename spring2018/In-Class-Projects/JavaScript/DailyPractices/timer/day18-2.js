//First Example

    // setTimeout(function() {
    //     console.log("It ran");
    //     }, 300);

//Another Example

    var timer = setInterval('tick()',1000);

    function tick() {
        var d = new Date();
        var t = d.toLocaleTimeString();
        document.getElementById("current-time").innerHTML = t;
        //console.log("DUDE!");

    }


    function stopTime() {
        clearInterval(timer);

    }

    var timeCount = 16;
    
    var countDown = setInterval(function startCountDown() {

            if(timeCount > 1){

                timeCount = timeCount -1;
                console.log(timeCount);
            }
            else {
                stopTime();
                console.log("time is up");
                clearInterval(countDown);
            }

    }, 500);
