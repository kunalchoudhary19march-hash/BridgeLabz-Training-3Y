// Q9: Random Math Quiz Generator

// Random number between 1 and 20
const getNumber = () => Math.floor(Math.random() * 20) + 1;

const num1 = getNumber();
const num2 = getNumber();

// Random operator from the list
const operators = ["+", "-", "*", "/"];
const operator = operators[Math.floor(Math.random() * operators.length)];

// switch statement calculates the correct answer
let answer;
switch (operator) {
  case "+":
    answer = num1 + num2;
    break;
  case "-":
    answer = num1 - num2;
    break;
  case "*":
    answer = num1 * num2;
    break;
  case "/":
    answer = (num1 / num2).toFixed(2); // division rounded to 2 decimals
    break;
  default:
    answer = "Invalid operator";
}

console.log(`Question: What is ${num1} ${operator} ${num2} ?`);
console.log(`Correct answer: ${answer}`);
