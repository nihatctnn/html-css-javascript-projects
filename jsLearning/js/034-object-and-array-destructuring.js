// ------- Object and Array Destructuring --------

let settings = {
    userName: "loremIpsum",
    password: "BadPassword",
    isActive: false,
    ip: "127.0.0.1",
    serverName: "https://github.com/nihatctnn"
}

// extracting the information in the object at once
// let userName = settings.userName
// console.log(userName)

// rename && destructuring
let { userName: user, password, isActive, ip: serverIP, serverName } = settings

console.log(user, password, isActive, serverIP, serverName)
console.log(settings)
console.log(user)

// extracting some information from the object
let { userName: userName2, password: password2, isActive: isActive2, ...newSettings } = settings
// If the variable name has not been defined before
//let {userName, password, isActive, ...newSettings} = settings

console.log(userName2, password2, isActive2, newSettings)

// copying an object with destructuring

let settings2 = { ...settings }
settings2.userName = "changed"
console.log("settings", settings)
console.log("settings2", settings2)

let score = [100, 200, 300, 400]

let [score1, score2, ...otherScore] = score
console.log(score1, score2, otherScore)

// Same as copying object... let settings2 = {...settings}
let copyOfScore = [...score]
console.log(copyOfScore)