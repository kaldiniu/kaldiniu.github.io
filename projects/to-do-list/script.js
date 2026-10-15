const addBtn = document.getElementById("addBtn");
const input = document.getElementById("taskInput");
const filters = document.getElementById("filters");
const list = document.getElementById("taskList");
const message = document.getElementById("message");
const counter = document.getElementById("counter");
const clearBtn = document.getElementById("clearCompleted");

let tasks = [];

let filter = "all";

const filterButtons = document.querySelectorAll("[data-filter]");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        filterButtons.forEach(btn => btn.classList.remove("current"));
        button.classList.add("current");
        filter = button.dataset.filter;
        render();
    });
});

function render() {
    list.replaceChildren();

    const filteredTasks = tasks.filter(task => {
        if (filter === "active") return !task.completed;
        if (filter === "completed") return task.completed;
        return true;
    });

    if (tasks.length === 0) {
        message.classList.remove("hidden");
        filters.classList.add("hidden");
        counter.classList.add("hidden");
        return;
    }

    message.classList.add("hidden");
    filters.classList.remove("hidden");
    counter.classList.remove("hidden");

    filteredTasks.forEach((task) => {
        const li = document.createElement("li");
        li.dataset.id = task.id;

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;

        checkbox.addEventListener("change", () => toggleCompleted(task.id));

        const span = document.createElement("span");
        span.textContent = task.text;

        span.classList.toggle("completed", task.completed);

        span.addEventListener("dblclick", () => startEdit(li, task));

        const btn = document.createElement("button");
        btn.textContent = "×";
        btn.className = "deleteBtn";

        btn.addEventListener("click", () => removeTask(task.id));

        li.append(checkbox, span, btn);
        list.appendChild(li);
    });

    const hasCompleted = tasks.some(task => task.completed);
    clearBtn.classList.toggle("hidden", !hasCompleted);
}

function startEdit(li, task) {
    const span = li.querySelector("span");

    const input = document.createElement("input");
    input.type = "text";
    input.value = task.text;
    input.className = "editInput";

    li.replaceChild(input, span);

    input.focus();
    input.select();

    let isSaving = false;

    const save = () => {
        if (isSaving) return;
        isSaving = true;

        const value = input.value.trim();

        if (!value) {
            removeTask(task.id);
            return;
        }

        task.text = value;
        update();
    };

    const cancel = () => {
        if (isSaving) return;
        isSaving = true;
        render();
    };

    input.addEventListener("keydown", (e) => {
        if (e.key === "Enter") save();
        if (e.key === "Escape") cancel();
    });

    input.addEventListener("blur", save);
}

function addTask() {
    const value = input.value.trim();

    if (!value) return;

    tasks.push({
        id: Date.now(),
        text: value,
        completed: false
    });
    input.value = "";
    input.focus();

    update()
}

function removeTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    if (index === -1) return;
    tasks.splice(index, 1);
    update();
}

function toggleCompleted(id) {
    const task = tasks.find(task => task.id === id);
    if (!task) return;
    task.completed = !task.completed;
    update();
}

function updateCounter() {
    const activeCount = tasks.filter(task => !task.completed).length;
    counter.textContent = `${activeCount} task${activeCount !== 1 ? "s" : ""} left`;
}

function clearCompleted() {
    tasks = tasks.filter(task => !task.completed);
    update();
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const data = localStorage.getItem("tasks");
  if (data) tasks = JSON.parse(data);
}

function update() {
  saveTasks();
  render();
  updateCounter();
}

addBtn.addEventListener("click", addTask);

input.addEventListener("keypress", (e) => {
    if (e.key === "Enter") addTask();
});

clearBtn.addEventListener("click", clearCompleted);

loadTasks();
update()