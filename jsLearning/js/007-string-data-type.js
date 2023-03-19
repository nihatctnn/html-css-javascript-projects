// -------------- String Data Type -----------

let email = "nihat0851@gmail.com"
let firstName = "nihat"
let lastName = "CETİN"

// string length 

console.log(email.length)

// finding first character --> [0]

console.log(firstName[0])
console.log(firstName.charAt(0))

// lower - uppercase letter conversions

firstName = firstName.toUpperCase()
console.log(firstName)

lastName = lastName.toLowerCase()
console.log(lastName)

// search

console.log(email.search("@"))
console.log(email[9])
console.log(email.search("blabla"))  // -1

// getting domain information with "slice"

console.log(email.slice(9))

let DOMAIN = email.slice( email.search("@") + 1)
console.log(DOMAIN)

console.log(
    DOMAIN.slice(0, DOMAIN.indexOf('.')) // only gmail 
)

// change a piece of information --> replace

email = email.replace('gmail.com', 'hotmail.com')
console.log(email)

// Searching for the information we want --> includes

console.log(email.includes("@")) // true
console.log(email.includes("blabla")) // false

// Did it start with a piece of information I wanted? And is it over? --> startsWidth, endsWidth

console.log(email.endsWith("hotmail.com"))

// Capitalize the first letters

firstName = "FIRSTNAME"
lastName = "LASTNAME"

let fullName = `${firstName[0].toUpperCase()}${firstName.slice(1).toLowerCase()} ${lastName[0].toUpperCase()}${lastName.slice(1).toLowerCase()}`
console.log(fullName)
