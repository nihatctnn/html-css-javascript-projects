// ---------- Template Literals --------- 

let username = "nihat"
const DOMAIN = "gmail.com"

let email = username + "@" + DOMAIN 
// console.log("Hello", username,"Welcome to our website !", "Your email address is :", email)

let productPrice = 25

// Template Literals use back-ticks (``) rather than the quotes ("") to define a string:

let info = ` Hello ${username} Welcome to our website !

Your email address is ${email}

Your debt : ${productPrice * 4} $

Time : ${new Date().getHours()}

First letter : ${username[0]} `

console.log(info)