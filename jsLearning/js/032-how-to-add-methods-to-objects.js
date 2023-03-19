// ------------ How to add methods to objects ------------

let user1 = {
    firstName: "Nşhat",
    lastName: "Çetin",
    score: [1, 2, 3, 4],
    isActive: true,
    shortName: function () {
        return `${this.firstName[0].toUpperCase()}. ${this.lastName}`
    }
};

console.log(user1)
console.log(user1.shortName)