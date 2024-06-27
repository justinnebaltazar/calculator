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
        add(a, b);
    } else if (operator.toLowerCase() === 'subtract') {
        subtract(a, b); 
    } else if (operator.toLowerCase() === 'multiply') {
        multiply(a, b);
    } else if (operator.toLowerCase() === 'divide') {
        divide(a, b);
    }
};

function getNumbers() {
    let numbers = Array.from(document.getElementsByClassName('number'));
    let display = document.getElementById('user-input');
    let string = '';

    numbers.forEach((num) => {
        num.addEventListener('click', (event) => {
            string += num.textContent;
            display.textContent = string;
        });
    });
    return string;
}

let firstNum = getNumbers(); 

function getOperator() {
    let operators = Array.from(document.getElementsByClassName('operator'));
    let operation = '';
    operators.forEach((op) => {
        op.addEventListener('click', (event) => {
            operation += operate.id;
        })
    })
    return operation;
}

let secondNum = getNumbers();
let operationChosen = getOperator();
let result = operate(operationChosen, parseInt(firstNum), parseInt(secondNum));

