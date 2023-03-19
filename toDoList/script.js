// When the user clicks the add  button

document.querySelector('#push').onclick = () => {

    var inputValue = document.querySelector('#todo-input').value.trim(); // it removes whitespaces

    // If the user presses the add button without entering data, it gives a warning

    if (inputValue.length == 0) {
        showToast('Warning ❗', 'You did not enter a task. Please enter a task.');
    }

    else {
        const newTask = document.createElement('li');
        newTask.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        newTask.innerHTML = `${inputValue} <button class="btn btn-danger delete-task"><i class="far fa-trash-alt"></i></button>`;

        const deleteButton = newTask.querySelector('.delete-task');
        deleteButton.addEventListener('click', () => {
            showToast('Congratulations 🎉😊✨', 'You have successfully completed the task.');
            newTask.remove();
        });

        document.querySelector('#todo-list').appendChild(newTask);
        showToast('Well Done ⭐', 'The new task has been successfully added.');
        document.querySelector('#todo-input').value = '';
    }
}

const showToast = (title, message) => {

    const toastContainer = document.querySelector('.toast-container');
    const toast = toastContainer.querySelector('.toast');
    const toastHeader = toast.querySelector('.toast-header');
    const toastTitle = toastHeader.querySelector('.me-auto');
    const toastBody = toast.querySelector('.toast-body');

    toastTitle.textContent = title;
    toastBody.textContent = message;

    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
};