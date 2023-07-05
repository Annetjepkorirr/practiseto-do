let tasks = [
    { id: 1, name: "Task1", completed: false },
    { id: 2, name: "Task2", completed: false },
    { id: 3, name: "Task3", completed: false },
    { id: 4, name: "Task4", completed: false }
];

function addTask() {
    let taskText = document.getElementById("taskText").value;
    if (taskText !== "") {
        let task = { id: tasks.length + 1, name: taskText, completed: false };
        tasks.push(task);
        renderTasks();
        document.getElementById("taskText").value = "";
    }
}

function renderTasks() {
    let taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    for (let i = 0; i < tasks.length; i++) {
        let task = tasks[i];
        let li = document.createElement("li");
        let checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = "task" + task.id;
        checkbox.name = "task" + task.id;
        checkbox.value = task.name;
        checkbox.checked = task.completed;
        checkbox.addEventListener("change", function() {
            task.completed = this.checked;
        });
        let label = document.createElement("label");
        label.htmlFor = "task" + task.id;
        label.innerText = task.name;
        let deleteButton = document.createElement("button");
        deleteButton.innerText = "DELETE";
        deleteButton.addEventListener("click", function() {
            tasks = tasks.filter(function(t) {
                return t.id !== task.id;
            });
            renderTasks();
        });
        let editButton = document.createElement("button");
        editButton.innerText = "EDIT";
        editButton.addEventListener("click", function() {
            let taskText = prompt("Enter new task name", task.name);
            if (taskText !== null && taskText !== "") {
                task.name = taskText;
                renderTasks();
            }
        });
        li.appendChild(checkbox);
        li.appendChild(label);
        li.appendChild(deleteButton);
        li.appendChild(editButton);
        taskList.appendChild(li);
    }
}

function deleteCompletedTasks() {
    tasks = tasks.filter(function(t) {
        return !t.completed;
    });
    renderTasks();
}

renderTasks();
