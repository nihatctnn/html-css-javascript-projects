// ------------------ Arrays -------------------

// Creating an Array

let domain = "we are coding"
let isActive = false
let items = [15, 25, 35, isActive, domain]
console.log(items)

let emptyArray = [] // empty list

// Finding the number of elements/items in the Array

console.log(
    items.length // number of items in array
)

// document.querySelector('#info').innerHTML = items.length

// Calling the first element in the Array

console.log(items[0])

// Calling the last element in the Array

console.log(items[items.length - 1])

// Calling the middle element in the Array

console.log(
    "middle :",
    items[Math.floor(items.length / 2)]
)

// Checking whether the information in the variable is an Array

console.log(
    typeof (items) // outputs as object
)

console.log(
    Array.isArray(items)
)

// which isArray -> returns True ?

console.log("[] : ", Array.isArray([]))
console.log("1 : ", Array.isArray(1))
console.log("true : ", Array.isArray(true))

// Adding an item to the Array structure and removing the desired item from the Array

let newItems = [10, 20, 30, 40,]
console.log("New Items : ", newItems)

// Array: add oge/element to end -> push

newItems.push(50)
console.log("50 : ", newItems)

// Array: add oge to front -> unshift

newItems.unshift(5)
console.log("5 : ", newItems)

// Array: remove the last item -> pop

let lastItem = newItems.pop() // we add the last item to lastItem
console.log("lastItem: ", lastItem, ", items: ", newItems)

// Array: remove the first element -> shift

let firstItem = newItems.shift() // we add the first item to firstItem
console.log("firstItem: ", firstItem, ", items: ", newItems)

// Changing the information of an element in an Array

// change the first element
items[0] = 5;
console.log(items)

// change the last element
items[items.length - 1] = 1000
console.log(items)

items[2] = 10000
console.log(items)

// Commonly used array methods

let list = [1, 2, 3, 4, 5]

let femaleUsers = ["Ayse", "Hatice", "Meryem"]
let maleUsers = ["Muhammed", "Adem", "Ali"]

list.unshift(femaleUsers)
list.push(maleUsers[2])
console.log(list)

list.pop()          // we deleted the last term of the array
console.log(list)

console.log(list.length)
console.log(list[0].length) // We got the length of the array we want in the array
console.log(list[0][0]) // We found Ayse information

// Separating items from Array -> splice(pos, item?)

console.log(list)

let secondList = list.splice(1, 5)

console.log("secondList: ", secondList)
console.log("list: ", list)

// Finding the index information of the item in the Array -> indexOf('value')

list.unshift("lorem")
list.push("ipsum")

console.log( list.indexOf("ipsum") ) // it will show us the index of ipsum

// Copying Array -> slice, [...ES6]

let copyItems = list
console.log(list)

copyItems.pop()     // we deleted the last term of the array 
console.log("copyItems", copyItems)
console.log("list", list)  // same items with copyItems as you can see. Failed to create copy.

/* we have a special method to copy arrays */

console.log("---- copying ------")
console.log("list : ", list)
copyItems = list.slice()
copyItems.pop()     // we deleted the last term of the array 
console.log("copyItems", copyItems)
console.log("list", list)

let es6Items = [...list] // [...ES6]
console.log("es6Items : ", es6Items)

// Combining Two Arrays -> [...ES6, ...ES6]
let allUsers = [...femaleUsers, ...maleUsers] 
console.log(allUsers)

// Converting information in Array to String -> toString, join
console.log(allUsers.toString())
console.log(allUsers.join(" --- "))

// Adding Item to the Index Information We Want -> splice(index, 0, value)
allUsers.splice(allUsers.length -1, 0, "Fatma")
allUsers.splice(Math.floor( allUsers.length / 2 ), 0, "Lorem")
console.log(allUsers)