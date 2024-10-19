// JavaScript source code
const display = document.getElementById('result');
let displayValue = '';

const updateDisplay = (value) => {
    display.innerHTML = value || '0';
};

document.querySelector('.buttons').addEventListener('click', (e) => {
    const btnValue = e.target.innerText;

    if (btnValue === 'DEL') {
        displayValue = displayValue.slice(0, -1);
    } else if (btnValue === 'RESET') {
        displayValue = '';
    } else if (btnValue === '=') {
        try {
            displayValue = eval(displayValue);
        } catch (error) {
            displayValue = 'Error';
        }
    } else {
        displayValue += btnValue;
    }

    updateDisplay(displayValue);
});
