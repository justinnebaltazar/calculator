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
    if (b === 0) {
        return "Error."
    }
    let quotient = a / b; 
    return quotient;
};

function convertToDecimal(a) {
    return (parseFloat(a) / 100).toString();
}

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
            let result = operate(operation, parseFloat(firstNum), parseFloat(secondNum));
            if(result.toString().length > 9) {
                result = result.toString().slice(0, 9);
            }
            display.textContent = result;
            // treats calculated number as the new firstNum to be used for next operation
            firstNum = result.toString();
            // reset variables for next input
            secondNum = '';
            operation = '';
            currentInput = '';
        } 
    });

    let clearButton = document.getElementById('clear');
    clearButton.addEventListener('click', (event) => {
        firstNum = ''; 
        display.textContent = ''; 
        currentInput = '';
        secondNum = ''; 
        operation = '';
        decimal = '';
    });

    let negativeButton = document.getElementById('negative');
    let tempNum = currentInput;
    negativeButton.addEventListener('click', (event) => {
        if(firstNum) {
            tempNum = parseFloat(currentInput) * -1;
            firstNum = tempNum.toString();
            currentInput = firstNum;
            display.textContent = currentInput; 

        } else if (firstNum && secondNum) {
            tempNum = parseFloat(currentInput) * -1;
            secondNum = tempNum.toString();
            currentInput = secondNum; 
            display.textContent = currentInput; 
        }
    });

    let decimalButton = document.getElementById('decimal'); 
    let decimal = '';
    decimalButton.addEventListener('click', (event) => {
        if(!currentInput.includes('.')) {
            currentInput += '.';
            display.textContent = currentInput;
        } if(!operation) {
            firstNum = currentInput;
        } else {
            secondNum = currentInput;
        }
    });

    let percentButton = document.getElementById('percent'); 
    percentButton.addEventListener('click', (event) => {
        if (currentInput !== '') {
            currentInput = convertToDecimal(currentInput);
            display.textContent = currentInput;
            if (!operation) {
                firstNum = currentInput;
            } else {
                secondNum = currentInput;
            }
        }
    });
};

getNumbersAndOperators();
