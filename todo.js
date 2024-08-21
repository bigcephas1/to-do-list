// const addTask = document.getElementById('add-task')
// const addTaskContainer = document.querySelector('#task-container')
// const inputTask = document.querySelector('#todoTask')

// addTask.addEventListener('click', () => {
//     let task = document.createElement('div')
//     task.classList.add('task')
//     let li = document.createElement('li')
//     li.innerText=`${inputTask.value}`
//     task.appendChild(li)

//     let checkBtn = document.createElement('button')
//     checkBtn.innerHTML=`<i class="fa-solid fa-check"></i>`
//     checkBtn.classList.add('checkTask')
//     task.appendChild(checkBtn)

//     let deleteBtn = document.createElement('button')
//     deleteBtn.innerHTML=`<i class="fa-solid fa-trash-can"></i>`
//     deleteBtn.classList.add('deleteTask')
//     task.appendChild(deleteBtn)

//     if (inputTask.value === "") {
//         alert('please enter a task')
//     } else {
//         addTaskContainer.appendChild(task)
//     }
// })
// create variables to target elements
const addTask = document.getElementById('add-task');
const addTaskContainer = document.querySelector('#task-container');
const inputTask = document.querySelector('#todoTask');

addTask.addEventListener('click', () => {
    let task = document.createElement('div');
    task.classList.add('task');

    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.appendChild(li);

    let checkBtn = document.createElement('button');
    checkBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
    checkBtn.classList.add('checkTask');
    task.appendChild(checkBtn);

    let deleteBtn = document.createElement('button');
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash-can"></i>';
    deleteBtn.classList.add('deleteTask');
    task.appendChild(deleteBtn);

    if (inputTask.value === "") {
        alert('Please enter a task');
    } else {
        addTaskContainer.appendChild(task);
    }

    // Clear the input field after adding the task
    inputTask.value = '';
    checkBtn.addEventListener('click', () => {
        checkBtn.parentElement.style.textDecoration='line-through'
    })
    deleteBtn.addEventListener('click', (e) => {
        let target=e.target
        target.parentElement.parentElement.remove()
    })
});
