const display = document.getElementById("display");
const buttons = document.getElementById("buttons");

let expression = "";

// ---------- RENDER ----------
function render() {
  display.textContent = expression || "0";
}

// ---------- INPUT ----------
function append(value) {
  expression += value;
  render();
}

function clearAll() {
  expression = "";
  render();
}

function backspace() {
  expression = expression.slice(0, -1);
  render();
}

// ---------- TOKENIZE ----------
function tokenize(str) {
  const tokens = [];
  let number = "";

  for (let ch of str) {
    if ("0123456789.".includes(ch)) {
      number += ch;
    } else {
      if (number) {
        tokens.push(parseFloat(number));
        number = "";
      }
      tokens.push(ch);
    }
  }

  if (number) tokens.push(parseFloat(number));

  return tokens;
}

// ---------- PRIORITY ----------
const precedence = {
  "+": 1,
  "-": 1,
  "*": 2,
  "/": 2
};

// ---------- SHUNTING YARD ----------
function toRPN(tokens) {
  const output = [];
  const ops = [];

  tokens.forEach(token => {
    if (typeof token === "number") {
      output.push(token);
    } else {
      while (
        ops.length &&
        precedence[ops[ops.length - 1]] >= precedence[token]
      ) {
        output.push(ops.pop());
      }
      ops.push(token);
    }
  });

  while (ops.length) output.push(ops.pop());

  return output;
}

// ---------- EVAL ----------
function evalRPN(rpn) {
  const stack = [];

  rpn.forEach(token => {
    if (typeof token === "number") {
      stack.push(token);
    } else {
      const b = stack.pop();
      const a = stack.pop();

      switch (token) {
        case "+": stack.push(a + b); break;
        case "-": stack.push(a - b); break;
        case "*": stack.push(a * b); break;
        case "/": stack.push(a / b); break;
      }
    }
  });

  return stack[0];
}

// ---------- CALCULATE ----------
function calculate() {
  try {
    const normalized = expression
      .replace(/×/g, "*")
      .replace(/÷/g, "/");

    const tokens = tokenize(normalized);
    if (tokens.length === 0) return; // ← доп. защита
    const rpn = toRPN(tokens);
    let result = evalRPN(rpn);

    result = Math.round((result + Number.EPSILON) * 1e10) / 1e10;

    expression = String(result);
    render();

  } catch {
    expression = "";
    display.textContent = "Ошибка";
  }
}

// ---------- BUTTONS ----------
buttons.addEventListener("click", (e) => {
  const value = e.target.dataset.value;
  if (!value) return;

  if (value === "C") return clearAll();
  if (value === "←") return backspace();
  if (value === "=") return calculate();

  append(value);
});

render();