// -------------- Local Storage -------------------

// Saving an information to localStorage

let email = "nihat0851@gmail.com"
localStorage.setItem('userEmail', email) // key, value

//Assigning the information in localStorage to a variable and calling

let localStorageEMailInfo = localStorage.getItem('userEmail')
console.log(localStorageEMailInfo)

// Removing from localStorage

localStorage.removeItem('userEmail')    // localStorage.clear() clears all

//  Operations

let user = {userName: "nihatcetin", isActive: true}
console.log(user)

//  If the information we want to keep is an object, we can convert the object to string with JSON.stringify.
localStorage.setItem('userInfo', JSON.stringify(user) )

let userInfo = localStorage.getItem('userInfo') 
userInfo = JSON.parse(userInfo)
console.log(userInfo)

 
let items = [1,2,3, user]

localStorage.setItem('newItems', items) // this is a wrong type of using localStorage. It will show us to 1, 2, 3, [object object]. Use JSON.stringify() !!!

localStorage.setItem('newItems', JSON.stringify(items))
localStorage.getItem('newItems')

let newItems = JSON.parse( localStorage.getItem('newItems')) //Extracting and using the information in localStorage with JSON Parse...