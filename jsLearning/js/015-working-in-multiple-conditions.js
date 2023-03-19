//-------- Working in Multiple Conditions ---------

let username = prompt("Please enter your name and surname.")
let age = prompt("Please enter your age")
let info = document.querySelector("#info")

if(!username){
    info.innerHTML = "Please check your name and surname ! You did not enter your name and surname !"
}

else if (username > 0 && age > 18){
     info.innerHTML = "You can get a driver's license"
}

else if (!(age >= 18)){
     info.innerHTML = "You can't get a driver's license"
}