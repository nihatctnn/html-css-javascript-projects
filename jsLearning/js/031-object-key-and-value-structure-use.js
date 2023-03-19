// ------------ Object Key & Value -------------

// [key1:1, key1:2, key3:3, ]
let laptop1 = {
    brand: "Apple",
    model: "MacBook Pro",
    "2kg": 2,
    modelName: "MacBook Pro",
    model_name: "MacBook Pro"
}

console.log(laptop1)

// Generating Correct Key Information

console.log(laptop1.brand, laptop1["brand"])
console.log(laptop1.model, laptop1["model"])
console.log(laptop1["2kg"])

// Adding a new value to the key information
laptop1.brand = "Mac"
laptop1["brand"] = "Mac1"
console.log(laptop1)

// Adding New Information
laptop1.version = "10.15.7"
console.log(laptop1)

// // Accessing Key Information (keys) -> Object.keys(item)
keys = Object.keys(laptop1)
console.log(keys)
console.log(Object.keys(laptop1))

keys.forEach(keyInfo => {
    console.log(keyInfo)
    console.log(laptop1[keyInfo])
})

// Accessing Value Information (values) -> Object.values(item)
console.log(
    Object.values(laptop1)
)

let values = Object.values(laptop1)

values.forEach(value => {
    console.log("value: ", value)
})

// We can use object to collect all information in one place
let setting = {
    password: 1234,
    userName: 'user1'
}