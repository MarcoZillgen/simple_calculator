import elements from "./elements.js";

/**
 * @param {number} firstNumber
 * @param {number | null} secondNumber
 * @param {string | null} currentOperator
 */

let firstNumber = 0;
let currentOperator = null;
let secondNumber = null;

// surpress context menu
document.addEventListener('contextmenu', (event) => event.preventDefault());

function reloadDisplay() {
    firstNumber = Number(firstNumber.toFixed(10));
    if (currentOperator === null) {
        elements.displayBig.textContent = firstNumber;
        elements.displaySmall.textContent = '';
    } else {
        elements.displayBig.textContent = secondNumber;
        elements.displaySmall.textContent = `${firstNumber} ${currentOperator}`;
    }
}

function backspace() {
    if (currentOperator === null) {
        firstNumber = Math.floor(firstNumber / 10);
        reloadDisplay();
    } else if (secondNumber === 0) {
        currentOperator = null;
        secondNumber = null;
        reloadDisplay();
    } else {
        secondNumber = Math.floor(secondNumber / 10);
        reloadDisplay();
    }
}

function calculate() {
    if (currentOperator === '+') firstNumber += secondNumber;
    else if (currentOperator === '-') firstNumber -= secondNumber;
    else if (currentOperator === '*') firstNumber *= secondNumber;
    else if (currentOperator === '/') {
        if (secondNumber === 0) {
            currentOperator = null;
            reloadDisplay();
            return alert('You cannot divide by 0!');
        }
        firstNumber /= secondNumber;
    }
    currentOperator = null;
    secondNumber = null;
    reloadDisplay();
}

function addNumber(num) {
    if (currentOperator === null) {
        firstNumber = firstNumber * 10 + Number(num.textContent);
        reloadDisplay();
    } else {
        secondNumber = secondNumber * 10 + Number(num.textContent);
        reloadDisplay();
    }
}

function addOperator(op) {
    if (currentOperator === null) {
        currentOperator = op.textContent;
        secondNumber = 0;
        reloadDisplay();
    } else {
        calculate();
        currentOperator = op.textContent;
        secondNumber = 0;
        reloadDisplay();
    }
}

function doSquare() {
    if (currentOperator === null) firstNumber *= firstNumber;
    else secondNumber *= secondNumber;
    reloadDisplay();
}

function doRoot() {
    if (currentOperator === null) firstNumber = Math.sqrt(firstNumber);
    else secondNumber = Math.sqrt(secondNumber);
    reloadDisplay();
}

// functionality of equals button
elements.equals.addEventListener('click', () => calculate());

// functionality of numbers (0-9)
elements.numbers.forEach((num) => num.addEventListener('click', () => addNumber(num)));

// functionality of operators (+, -, *, /)
elements.operators.forEach((op) => op.addEventListener('click', () => addOperator(op)));

// functionality of backspace button
elements.backspace.addEventListener('click', () => backspace());