function add(a, b) {
    let sum = a + b; 
    return sum;
};

function subtract(a, b) {
    let difference = a - b; 
    return difference; 
};

function multiply(a, b) {
    let product = a * b; 
    return product;
};

function divide(a, b) {
    let quotient = a / b; 
    return quotient;
};

function operate(operator, a, b) {
    if (operator.toLowerCase() === 'add') {
        return add(a, b);
    } else if (operator.toLowerCase() === 'subtract') {
        return subtract(a, b); 
    } else if (operator.toLowerCase() === 'multiply') {
        return multiply(a, b);
    } else if (operator.toLowerCase() === 'divide') {
        return divide(a, b);
    }
    return null;
};

// initialize the a and b values
let firstNum = ''; 
let secondNum = ''; 
let operation = '';

function getNumbersAndOperators() {
    let numbers = Array.from(document.getElementsByClassName('number'));
    let operators = Array.from(document.getElementsByClassName('operator'));
    let display = document.getElementById('user-input');
    let currentInput = '';

    numbers.forEach((num) => {
        num.addEventListener('click', (event) => {
            currentInput += num.textContent;
            display.textContent = currentInput; 
            if(!operation) {
                firstNum = currentInput;
            } else {
                secondNum = currentInput; 
            }
        });
    });

    operators.forEach((op) => {
        op.addEventListener('click', (event) => {
            operation = op.id;
            display.textContent += ` ${op.textContent}`; 
            currentInput = '';
        });
    });

    let equalsButton = document.getElementById('equals'); 
    equalsButton.addEventListener('click', (event) => {
        if(firstNum && secondNum && operation) {
            let result = operate(operator, parseFloat(firstNum), parseFloat(secondNum));
            display.textContent = result; 
            // treats calculated number as the new firstNum to be used for next operation
            firstNum = result.toString();
            // reset variables for next input
            secondNum = '';
            operation = '';
            currentInput = '';
        }
    });

};
