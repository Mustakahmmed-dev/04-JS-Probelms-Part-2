
function add(num1, num2){
    return num1 + num2;
}
function subtract(num1, num2){
    return num1 - num2;
}
function multiply(num1, num2){
    return num1 * num2;
}
function divide(num1, num2){
    return num1 / num2;
}

// Calculator
function Calculator(a, b, operation){

    if(operation === "add"){
        return add(a, b);
    }
    else if(operation === "subtract"){
        return subtract(a, b);
    }
    else if(operation === "multiply"){
        return multiply(a, b);
    }
    else if(operation === "divide"){
        return divide(a, b);
    }
    else{
        return "Sorry! your input is not valid. Please use the exact operation method."
    }
}
let result = Calculator(5, 5, "multiply");
console.log("Sum : ", result)