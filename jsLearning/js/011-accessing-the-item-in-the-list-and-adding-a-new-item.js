//------------ Accessing the item in the list and adding a new item. ------------

let lastChild = document.querySelector("ul#list>li:last-child")
lastChild.style.color = "red"
lastChild.innerHTML = "Third has been changed..."

let firstChild = document.querySelector("ul#list>li:first-child")
firstChild.style.color = "blue"
firstChild.innerHTML = "First has been changed..."


let liDOM = document.createElement("li")
let ulDOM = document.querySelector("ul#list")

liDOM.innerHTML = "New one"

//ulDOM.append(liDOM)      // Adds to the end of the list

ulDOM.prepend(liDOM)      // Adds to the top of the list