// --------------- Boolean Data Type ----------------

// Understanding 0 and 1

let isActive = false // 0
isActive = true // 1 
console.log

let userName;
let isUserName = Boolean(userName)
console.log(isUserName)     // false

console.log(Boolean("11"))  // true
console.log(Boolean("0"))   // true
console.log(Boolean(""))    // false

userName = "user"
console.log("User Name:", Boolean(userName))

// 0 ,-0, null, false, NaN, undefined, ("") ->

console.log(Boolean(0))          // false
console.log(Boolean(-0))         // false
console.log(Boolean(0.1))        // true
console.log(Boolean(0 === 0))    // Is zero equal to zero ? yes, TRUE

Boolean(userName.length > 0) // if length of username is taller than 0 that mean the is a user name :)