// -------------- Form and Form Submit Management ----------------

let formDOM = document.querySelector("#userForm")
formDOM.addEventListener('submit', formSubmit)

function formSubmit(event) {
    event.preventDefault() // prevent it from submitting a form
    console.log("Sended !")

    let answerInputDOM = document.querySelector('#answer')
    console.log(answerInputDOM.value)
    localStorage.setItem('answer', answerInputDOM.value)
}