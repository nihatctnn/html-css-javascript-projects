// ------------ compare-and-logical-operators --------------

let price = "100"
let user = "nihat"

// if equal == 
console.log("== :", price == 1 )
console.log("== :", price == 100 )

// if both value and type are equal === 
console.log("=== :", price === 1 )
console.log("=== :", price === "100" )

// not equal != 
console.log("Do you have an account ? :", user != "guest" )

// if small <    
console.log("price < 100", price < 100)

// if less than or equal <= 
console.log("price <= 100", price <= 100)

// if big > 
console.log("price > 200", price > 200)

// if greater or equal >= 
console.log("price >= 100", price >= 100)

// and &&
price = 0
console.log( price > 0 && user != "guest" )

// or ||
console.log( price > 0 || user != "guest" )

// ! not (reverse)
user = "guest"
price = 1
console.log(!(price > 0 && !user == "guest") )