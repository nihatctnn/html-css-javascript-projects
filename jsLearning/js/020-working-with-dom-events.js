// ----------- Working with DOM Events ----------------

let chapter = document.querySelector("#pointed")
chapter.addEventListener("click", callFunc)

function callFunc() {
    console.log("event is checked")
    this.style.color == "black" ? this.style.color = "red" : this.style.color = "black"
}