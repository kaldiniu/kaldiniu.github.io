const numberEl = document.getElementById('number');
const plusBtn = document.getElementById('plus');
const minusBtn = document.getElementById('minus');
const resetBtn = document.getElementById('reset');

let count = 0;

function render() {
    numberEl.textContent = count;
}

plusBtn.addEventListener('click', () => {
    count++;
    if (count > 10) {
        count = 10;
    }
    render();
});

minusBtn.addEventListener('click', () => {
    count = Math.max(0, count - 1); // without if
    render();
})

resetBtn.addEventListener('click', () => {
    count = 0;
    render();
});

render();