
let num1 = parseFloat(prompt("Enter the first number:"));
let num2 = parseFloat(prompt("Enter the second number:"));
let operator = prompt("Enter operator (+, -, *, /):");

let result;

if (operator === "+") {
    result = num1 + num2;
    document.write("Addition: " + result);
}
else if (operator === "-") {
    result = num1 - num2;S
    document.write("Subtraction: " + result);
}
else if (operator === "*") {
    result = num1 * num2;
    document.write("Multiplication: " + result);
}
else if (operator === "/") {
    
    result = num1 / num2;
    document.write("Division: " + result);
    
}
else {
    document.write("Invalid operator");
}
