let currentInput = '0';
let currentOperation = '';
let display = document.getElementById('display');

function updateDisplay() {
    display.textContent = currentInput;
}

function appendNumber(number) {
    if (currentInput === '0' || currentInput === 'Error') {
        currentInput = number;
    } else {
        currentInput += number;
    }
    updateDisplay();
}

function addDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
        updateDisplay();
    }
}


function setOperation(operation) {
    if (operation === '⬅') {
        currentInput = currentInput.slice(0, -1); 
        updateDisplay();

    } else {
        if (currentOperation !== '') {
            calculate();
        }
        currentOperation = operation;
        currentInput += ' ' + operation + ' ';
        updateDisplay();
    }
}

function calculate() {
    try {
        currentInput = eval(currentInput).toString();
        if (currentInput === 'Infinity' || currentInput === '-Infinity') {
            throw new Error('Infinity');
        }
    } catch (error) {
        currentInput = 'Error';
    } finally {
        currentOperation = '';
        updateDisplay();
    }
}

function clearDisplay() {
    currentInput = '0';
    currentOperation = '';
    updateDisplay();
}

document.getElementById('display').addEventListener('mouseover', function() {
    this.style.overflow = 'auto';
});

document.getElementById('display').addEventListener('mouseout', function() {
    this.style.overflow = 'hidden';
});
