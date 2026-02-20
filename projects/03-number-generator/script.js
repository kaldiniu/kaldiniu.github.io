const minEl = document.getElementById("min");
const maxEl = document.getElementById("max");
const resultEl = document.getElementById("result");
const errorEl = document.getElementById("error");
const button = document.getElementById("generate");

function showError(msg) {
    errorEl.textContent = msg;
    resultEl.textContent = "";
}

function clearError() {
    errorEl.textContent = "";
}

function randomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function handleGenerate() {
    clearError();

    if (minEl.value === "" || maxEl.value === "") {
        showError("Enter numbers");
        return;
    }

    const min = Number(minEl.value);
    const max = Number(maxEl.value);

    if (isNaN(min) || isNaN(max)) {
        showError("Only numbers allowed");
        return;
    }

    if (min >= max) {
        showError("Min must be less than Max");
        return;
    }

    const value = randomInt(min, max);
    resultEl.textContent = value;
}

button.addEventListener("click", handleGenerate);