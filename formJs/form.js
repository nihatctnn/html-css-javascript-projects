
let userFormDom = document.querySelector('#userForm')
userFormDom.addEventListener('submit', formHandler)

const alertDOM = document.querySelector('#alert')


/* ALERT FOR WRONG INPUTS */
const alertFunctionWrong = (message) => `
    <div class="alert alert-danger alert-dismissible fade show" role="alert">
    <strong> ${message} </strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`
/* ALERT FOR RIGHT INPUTS */
const alertFunctionTrue = (message) => `
    <div class="alert alert-success alert-dismissible fade show" role="alert">
    <strong> ${message} </strong>
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    </div>
`

function formHandler(event) {
    event.preventDefault()
    const USER_NAME = document.querySelector('#username')
    const SCORE = document.querySelector('#score')

    if (USER_NAME.value && SCORE.value) {
        addItem(USER_NAME.value, SCORE.value)
        alertDOM.innerHTML = alertFunctionTrue("✅ Your information has been successfully saved 😃")
        USER_NAME.value = "" // removes user name value when user clicks the submit button
        SCORE.value = ""     //  removes score value when user clicks the submit button
    }

    else {
        alertDOM.innerHTML = alertFunctionWrong(" Opps❗Please check your username and grade informations 🔎")
    }

}

let userListDOM = document.querySelector('#userList')

const addItem = (userName, score) => {

    let liDOM = document.createElement('li')

    liDOM.innerHTML = `${userName}
    <span class="badge bg-primary rounded-pill">${score}</span>`
    liDOM.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center')
    userListDOM.append(liDOM)
}