// ------- working with fetch api ------------

// extract data from JSON file

fetch("data/settings.json").then(
  response => response.json()
).then(responseJson => {
  console.log(responseJson)
  console.log(responseJson.userName)
})

// get data via API
fetch("https://jsonplaceholder.typicode.com/users").then(
  response => response.json()).then(responseJson => console.log(responseJson))

let userListDOM = document.querySelector("#list")

fetch("https://jsonplaceholder.typicode.com/posts").then(
  response => response.json()
).then(responseJson => {
  responseJson.forEach(item => {
    let liDOM = document.createElement('li')
    liDOM.innerHTML = item.title
    userListDOM.appendChild(liDOM)
  })
}) 