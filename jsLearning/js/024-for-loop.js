// -------------- For Loop ----------------

let users = ["Lorem", "Ipsum", "Dolor"]

const userListDOM = document.querySelector('#userList')

for (index = 0; index < users.length; index++) {
  const liDOM = document.createElement('li')
  liDOM.innerHTML = users[index]
  userListDOM.appendChild(liDOM)
}