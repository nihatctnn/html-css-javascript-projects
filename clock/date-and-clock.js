let fullName = prompt("Please Enter Your Name.")
myName.innerHTML = `${fullName}`    // displays the username on the screen

var today = new Date();     // displays the day
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
myDay.innerHTML = days[today.getDay()]

date.innerHTML = `${today.getDate()}.${today.getMonth()+1}.${today.getFullYear()}` // day.month.year 
//we added 1 to the month because the function returns a number between 0 and 11

function clock() {

    let dateTime = new Date();

    let hour = dateTime.getHours();
    let minute = dateTime.getMinutes();
    let second = dateTime.getSeconds();

    hour = (hour < 10) ? "0" + hour : hour;
    minute = (minute < 10) ? "0" + minute : minute;
    second = (second < 10) ? "0" + second : second;

    document.querySelector("#hour").innerHTML = `${hour}`
    document.querySelector("#minute").innerHTML = `${minute}`
    document.querySelector("#second").innerHTML = `${second}`
}

setInterval(clock, 1000);