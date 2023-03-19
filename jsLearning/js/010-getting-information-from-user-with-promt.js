// ---------- Getting information from user with promt ----------

let fullName = prompt("Please Enter Your Name", "Please write just your first name.")
let pointed = document.querySelector("#pointed")

pointed.innerHTML = `${pointed.innerHTML} <small style = "color: red"> ${fullName} </small>`

