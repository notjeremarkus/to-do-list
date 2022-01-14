// Selectors
const todoSyote = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");


// Event listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);


// Functions
function addTodo(event) {

    // Prevent default event
    event.preventDefault();

    console.log('toimiiko');

    // Create a todo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create LI
    const newTodo = document.createElement("li");
    newTodo.innerText = todoSyote.value;
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // Completed button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);

    // Delete button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);


    // Append new todo div to list
    todoList.appendChild(todoDiv);

    // Clear todo input
    todoSyote.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    // Delete todo
    if (item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        // Animation
        todo.classList.add("fall");
         
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }

    // Completed
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}