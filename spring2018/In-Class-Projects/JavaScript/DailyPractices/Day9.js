

let clock = new Date();

let months = new Array();
months[0] = "January";
months[1] = "February";
months[2] = "March";
months[3] = "April";
months[4] = "May";
months[5] = "June";
months[6] = "July";
months[7] = "August";
months[8] = "September";
months[9] = "October";
months[10] = "November";
months[11] = "December";

let month = months[clock.getMonth()];
let day = clock.getDate() ;
let hour = clock.getHours();
let min = clock.getMinutes();

let dayOfweek = new Array();
dayOfweek[0] = "Sunday";
dayOfweek[1] = "Monday";
dayOfweek[2] = "Tuesday";
dayOfweek[3] = "Wednesday";
dayOfweek[4] = "Thursday";
dayOfweek[5] = "Friday";
dayOfweek[6] = "Saturday";
let weekday = dayOfweek[clock.getDay()];


let dayholder = document.getElementById("weekday");
let quotebox = document.getElementById("quoteholder");
let imagebox = document.getElementById("myimg");

    switch (weekday){
        case "Sunday":
            console.log("It's Sunday");
            break;
        case "Monday":
            dayholder.innerHTML = weekday;
            quotebox.innerHTML = "It's Monday great ready for another great week!";
            imagebox.src = "http://cdn.worldofwonder.net/wp-content/uploads/2016/09/Grumpy_Cat_05_Freelargeimages-com-1.jpg";
            break;
        case "Tuesday":
            console.log("It's Tuesday");
            break;
        case "Wednesday":
            console.log("It's Wednesday");
            break;
        case "Thursday":
            console.log("It's Thursday");
            break;
        case "Friday":
            console.log("It's Friday");
            break;
        case "Saturday":
            console.log("It's Saturday");
            break;
}

console.log("It's " + weekday + " " + month + " the "+ day + "th, "+ hour + ":" + min);
let theTime = ("It's " + weekday + " " + month + " the "+ day + "th, "+ hour + ":" + min);
 function getTime() {
     document.getElementById("output").innerHTML = theTime;
}


// switch (hour){
//     case 4 || 5 || 6 || 7 || 8 || 9 || 10 || 11 || 12:
//         alert("Good Morning");
//         break;
//     case 13:
//         alert("Good Afternoon!");
//         break;
//     case 18:
//         alert("Good Evening");
//         break;
// }



if (hour === 4 || hour === 5 || hour === 6 || hour === 7 || hour === 8 || hour === 9 || hour === 10 || hour === 11 || hour === 12){
    alert("Good Morning");
}
else if( hour === 13 || hour === 14 || hour === 15 || hour === 16 || hour === 17){
    alert("Good Afternoon!");
}
else {
    alert("Good Evening");
}