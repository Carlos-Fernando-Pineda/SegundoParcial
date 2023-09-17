// todolist/todolist.js

const taskInput = document.getElementById("task");
const taskList = document.getElementById("task-list");
const addButton = document.getElementById("add-task");
const completeAllButton = document.getElementById("complete-all");
const clearCompletedButton = document.getElementById("clear-completed");

addButton.addEventListener("click", () => {
    const taskText = taskInput.value.trim();
    if (taskText !== "") {
        addTask(taskText);
        taskInput.value = "";
    }
});

taskList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.tagName === "LI") {
        toggleTaskCompletion(target);
    }
});

completeAllButton.addEventListener("click", () => {
    completeAllTasks();
});

clearCompletedButton.addEventListener("click", () => {
    clearCompletedTasks();
});

function addTask(taskText) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `
        <input type="checkbox">
        <span>${taskText}</span>
        <button class="delete">Eliminar</button>
    `;
    taskList.appendChild(listItem);
}

function toggleTaskCompletion(taskItem) {
    taskItem.classList.toggle("completed");
}

function completeAllTasks() {
    const taskItems = taskList.querySelectorAll("li");
    taskItems.forEach((taskItem) => {
        taskItem.classList.add("completed");
    });
}

function clearCompletedTasks() {
    const completedItems = taskList.querySelectorAll(".completed");
    completedItems.forEach((completedItem) => {
        completedItem.remove();
    });
}


export { addTask, toggleTaskCompletion, completeAllTasks, clearCompletedTasks };
