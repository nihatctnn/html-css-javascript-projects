//  --------------- Number Data Type ---------

let price = 100
let tax = 0.18
let priceTax = price * tax
let total = price + priceTax

console.log(
    "Price is :", price,
    "Tax is :", tax,
    "Tax price is :", priceTax,
    "Total amount is :", total
)

//  --------------- Mode ---------

console.log(" Kalan ürün miktarı : ", 19 % 4)

//  --------------- Exponentiation ** ------------------------

console.log(2 * 2 * 2 * 2)  // 2 ^ 4 = 16
console.log(2 ** 4)         // 2 ^ 4 = 16 demek

//  --------------- Rounding Operations ---------------

console.log( "Rounding down : ", Math.floor(1.2)) // --> 1
console.log("Rounding up : ", Math.ceil(1.1)) // --> 2
console.log("Close rounding : ", Math.round(1.5))

//  --------------- Getting a number with string  ---------

let stringNumber = "123"
console.log(stringNumber)

let newNumber = Number(stringNumber)
console.log(newNumber)
console.log("The info which is sended to inside of the number constructor.", Number(123))