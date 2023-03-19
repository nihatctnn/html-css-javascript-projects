// ---------- Item Selection with Label and ID from the DOM ------------



let title = document.getElementById('title')
title.innerHTML = "The information has been changed successfuly !"
title.style.color = "green"
console.log(title.innerHTML)

let link = document.querySelector("#webLink")
link.innerHTML += "information has been changed !"
link.style.color = "red"
link.classList.add('btn')




