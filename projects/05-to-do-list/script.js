const addBtn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");
const message = document.getElementById("message");

let tasks = [];

function render() {
    list.replaceChildren();

    if (tasks.length === 0) {
        message.classList.remove("hidden");
        return;
    }

    message.classList.add("hidden");

    tasks.forEach((task, index) => {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => toggleCompleted(index));

        const span = document.createElement("span");
        span.textContent = task.text;

        span.classList.toggle("completed", task.completed);

        const btn = document.createElement("button");
        btn.textContent = "×";
        btn.className = "deleteBtn";

        btn.addEventListener("click", () => removeTask(index));

        li.append(checkbox, span, btn);
        list.appendChild(li);
    });
}

function addTask() {
    const value = input.value.trim();

    if (!value) return;

    tasks.push({
        text: value,
        completed: false
    });
    input.value = "";
    input.focus();

    render();
}

function removeTask(index) {
    tasks.splice(index, 1);
    render();
}

function toggleCompleted(index) {
    tasks[index].completed = !tasks[index].completed;
    render();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

render();