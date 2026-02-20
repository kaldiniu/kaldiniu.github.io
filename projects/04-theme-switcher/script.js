const body = document.body;
const button = document.getElementById("switchTheme");

function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("dark");
    } else {
        body.classList.remove("dark");
    }

    localStorage.setItem("theme", theme);
}

function toggleTheme() {
    const isDark = body.classList.contains("dark");
    applyTheme(isDark ? "light" : "dark");
}

function initTheme() {
    const savedTheme = localStorage.getItem("theme") || "light";
    applyTheme(savedTheme);
}

button.addEventListener("click", toggleTheme);

initTheme();