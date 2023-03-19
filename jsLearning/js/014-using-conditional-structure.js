// -------------- Using Conditional Structure (if / else) --------------

// if there is user information, print the name on the screen
// if (username.length > 0) { console.log(username)} otherwise { console.log("no information")}
// if (username.length > 0) { console.log(username)} else { console.log("no information")}


let username = prompt(`Please enter your username :`)

if (username.length > 0){
    console.log(username)
}

else {
    console.log("No information")
}