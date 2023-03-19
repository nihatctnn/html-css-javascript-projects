// ------ Ternary Operator (condition ? if it is true : if it is wrong) -------

let username = prompt("Please enter your username")
let info = document.querySelector("#info")

info.innerHTML = `${username ? username : " You did not enter your name correctly :("}`