// --------------- Adding or removing css class information from the dom --------------

let pointed = document.querySelector("#pointed")

//pointed.classList.add("text-primary") // adds one class

pointed.classList.add("text-primary", "fw-bold", "fst-italic")  // adds more than one class

pointed.classList.remove("fw-bold", "fst-italic") // removes more than one class

console.log(pointed.classList)