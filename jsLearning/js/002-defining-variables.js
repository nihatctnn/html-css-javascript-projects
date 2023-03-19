// -------------- Defining a variable with var ---------------

/*
    var serverName = "www.nihatcetin.com"
    console.log(serverName)
*/

//  Empty variable with let
let serverName;
console.log(serverName)

//  Assigning information to a variable with let
serverName = "https://nihatcetin.org"
console.log(serverName)

let password = "1234";
console.log(password)


/*
    Wrong Usage 

    console.log(fullName)
    let fullName = "Nihat Çetin";
*/

let fullName = "Lorem ipsum dolar";

// Changing the information in the variable defined with let.

fullName = "Nihat Çetin"
console.log(fullName)

// Combining or Adding
fullName + " New information ! " // Has it been added ? No
console.log(fullName + " Test information"); // It wasn't added because we couldn't assign it to the variable.

fullName = fullName + " New information"
fullName = "2: Info : " + fullName
console.log(fullName);

// Trying to define a variable as empty with const
// const serverPassword;  Wrong !

const SERVER_PASSWORD = "absdf123"
console.log(SERVER_PASSWORD);

// const SERVER_PASSWORD = "123" is incorrect because we can define once with const.