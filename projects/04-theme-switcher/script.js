const body = document.body;
const button = document.getElementById("switchTheme");

function applyTheme(theme) {
    if (theme === "dark") {
        body.classList.add("darkTheme");
    } else {
        body.classList.remove("darkTheme");
    }

    localStorage.setItem("projectTheme", theme);
}

function toggleTheme() {
    const isDark = body.classList.contains("darkTheme");
    applyTheme(isDark ? "light" : "dark");
}

function initTheme() {
    const savedTheme = localStorage.getItem("projectTheme") || "light";
    applyTheme(savedTheme);
}

button.addEventListener("click", toggleTheme);

initTheme();