function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    var list = document.createElement("li");
    list.innerHTML = `
        <span>${taskInput.value}</span>
        <div class="btn-group">
            <button class="edit-btn" onclick="editTask(this)">
                <img src="https://cdn-icons-png.flaticon.com/512/1828/1828911.png" alt="Edit">
            </button>
            <button class="delete-btn" onclick="deleteTask(this)">
                <img src="https://cdn-icons-png.flaticon.com/512/484/484662.png" alt="Delete">
            </button>
        </div>`;
    taskList.appendChild(list);
    taskInput.value = ""; 
}

function deleteTask(button) {
    button.parentElement.parentElement.remove();
}

function editTask(button) {
    let taskSpan = button.parentElement.parentElement.querySelector("span");
    let newTask = prompt("Edit your task:", taskSpan.textContent);
    if (newTask !== null && newTask.trim() !== "") {
        taskSpan.textContent = newTask;
    }
}