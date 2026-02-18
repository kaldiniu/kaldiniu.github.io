const num1 = document.getElementById("number-1");
const num2 = document.getElementById("number-2");
const result = document.getElementById("result");
const message = document.getElementById("error");

const buttons = document.querySelectorAll("[data-operator]");

function reset() {
    result.textContent = "";
    message.textContent = "";
}

function calculate(operator) {
    reset();

    if (num1.value === "" || num2.value === "") {
        message.textContent = "Enter the numbers";
        return;
    }

    const a = Number(num1.value);
    const b = Number(num2.value);

    if (isNaN(a) || isNaN(b)) {
        message.textContent = "Only numbers";
        return;
    }

    if (operator === "/" && b == 0) {
        message.textContent = "Division by 0 is impossible";
        return;
    }

    let res;

    if (operator === "+") res = a + b;
    if (operator === "-") res = a - b;
    if (operator === "*") res = a * b;
    if (operator === "/") res = a / b;

    result.textContent = res;
}

buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        calculate(btn.dataset.operator);
    });
});