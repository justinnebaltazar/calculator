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