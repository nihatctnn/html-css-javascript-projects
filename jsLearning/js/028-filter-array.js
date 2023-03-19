// -------------- Array Filter  ----------------

// More than 5 letters (6) ??
const PRODUCTS = ["Mic", "Cable", "Speaker", "Desktop PC", "Server", "Mouse", "Keyboard"]

const NEW_PRODUCTS = PRODUCTS.filter(item => item.length > 5)
console.log(NEW_PRODUCTS)


// Active users ??
const USERS = [
  {fullName: "User1", isActive: false},
  {fullName: "User2", isActive: true},
  {fullName: "User3", isActive: true},
  {fullName: "User4", isActive: false},
]

const ACTIVE_USERS = USERS.filter(user => user.isActive )
console.log(ACTIVE_USERS)