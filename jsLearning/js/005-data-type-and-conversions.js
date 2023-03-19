// ------------- Data Type & Conversions ------------

let price = 150
let stringPrice = "150"
let hasPassword = false

console.log(

    "price : ", typeof(price)
)

console.log(

    "stringPrice : ", typeof(stringPrice)
)

console.log(

    "hasPassword : ", typeof(hasPassword)
)

// Converting string types to int and float

let number1 = "11"
number1 = parseInt(number1)
console.log("Number 1 :", number1, " Type : ", typeof(number1))

let number2 = "25px"
number2 = parseInt(number2)
console.log("Number 2 :", number2, " Type : ", typeof(number2))

let number3 = "4.89cm"
number3 = parseFloat(number3)
console.log("Number 3 :", number3, " Type : ", typeof(number3))

// Converting number types to string types

let number4 = 45
number4 = number4.toString()
console.log("Number 4 :", number4, " Type : ", typeof(number4))

let number5
number5 = isNaN(true) //false
console.log(number5)